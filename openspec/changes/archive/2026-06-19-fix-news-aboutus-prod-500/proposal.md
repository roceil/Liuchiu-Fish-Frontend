## Problem

在 production build（`pnpm build` 後執行 `node .output/server/index.mjs`，Zeabur 亦同）下，`/news` 與 `/about-us` 兩頁回傳 HTTP 500，頁面錯誤訊息為 `Cannot read properties of null (reading 'ce')`；首頁與多數頁面正常（200）。此問題只在 production build 重現，`pnpm dev` 不會出現。重啟 Zeabur 主機無法解決，因為這是打包產物的問題而非主機狀態問題。

## Root Cause

build 同時打包了兩份 Vue runtime：

- `vue@3.5.35`：由 Nuxt 3.21.6 工具鏈、`vue-router`、`@vue/server-renderer@3.5.35` 等拉入。
- `vue@3.5.13`：由元件生態（`reka-ui`、`radix-vue`、`pinia`、`@vueuse`、`embla-carousel-vue`、`@unhead/vue`）以及專案直接相依 `vue@^3.4.21` 解析而來；專案頂層 `node_modules/vue` 即指向 3.5.13。

SSR 時兩份 runtime 同時載入，元件實例的 parent 鏈跨版本對不上。當頁面渲染到使用 Teleport 的元件（about-us 的 `HoverCard`、news 的分頁 popper 等 reka-ui/radix-vue 元件）時，`@vue/runtime-core@3.5.35` 在解析 Teleport 目標快取時讀取 `parentComponent.ce._teleportTargets`，而此時 `parentComponent` 為 `null`，遂拋出 `Cannot read properties of null (reading 'ce')`。首頁不渲染這類 Teleport 元件，故不受影響。

已用既有 `.output` build 於本機重現：`/news`、`/about-us` 為 500、`/` 為 200，與正式環境一致；錯誤存取點定位於 `runtime-core@3.5.35` 的 `.ce._teleportTargets`。

## Proposed Solution

以套件管理層強制全專案只解析單一 Vue 版本，消除重複 runtime：

- 在根目錄 package 設定檔加入 `pnpm.overrides`，將 Vue 全家對齊到單一版本 `3.5.35`（與 Nuxt 3.21.6 工具鏈一致）：`vue`、`@vue/runtime-core`、`@vue/runtime-dom`、`@vue/server-renderer`、`@vue/compiler-core`、`@vue/compiler-dom`、`@vue/compiler-sfc`、`@vue/shared`、`@vue/reactivity`。
- 重新安裝相依（更新 lockfile），確認 `node_modules` 與 build 產物中只剩單一 Vue 版本。
- 重新 build 並在本機以 production 模式驗證 `/news`、`/about-us` 回 200、首頁仍 200。

## Non-Goals

- 不處理 `/api/_nuxt_icon/*` 的 `Cannot find module '@iconify-json/<set>/icons.json'` 錯誤——這是 @nuxt/icon 在 standalone build 的 bundle 行為，與本 500 無關，另案處理。
- 不在本次變更升級 Nuxt、reka-ui、radix-vue 或其他套件的主要版本；僅統一 Vue 版本。
- 不移除 `radix-vue`（雖與 `reka-ui` 並存且部分 UI 元件仍在用）——清理重複 UI 套件屬獨立重構，不在本次範圍。
- 不改動 `/news`、`/about-us` 的頁面邏輯或資料抓取流程。

## Success Criteria

- production build（`pnpm build` 後 `node .output/server/index.mjs`）下，`GET /news` 與 `GET /about-us` 回 200，且不再出現 `Cannot read properties of null (reading 'ce')`。
- 首頁與其他既有頁面在 production build 下維持正常（不產生新的 500）。
- `node_modules` 與 `.output/server` 中只存在單一 Vue 版本（`@vue/runtime-core`、`@vue/runtime-dom` 各僅一份）。
- `pnpm build` 成功，無新增建置錯誤。

## Impact

- Affected specs: frontend-build-config（新增「single Vue runtime」需求）
- Affected code:
  - Modified: package.json（新增 pnpm.overrides）
  - Modified: pnpm-lock.yaml（重新安裝後更新）
