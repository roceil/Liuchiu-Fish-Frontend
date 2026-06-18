## Problem

正式環境（Zeabur）對 `/api/_nuxt_icon/*` 的請求會回 HTTP 500，server log 為 `Cannot find module '@iconify-json/<set>/icons.json'`（例如 `material-symbols-light`）。此端點是 @nuxt/icon 的 server 圖示資料來源；失敗時頁面上的 `<Icon>` 取不到圖示。此問題與先前 `/news`、`/about-us` 的 Vue 500 無關，是獨立的圖示模組問題。

此外，目前的 server build 會把 8 個完整的 `@iconify-json` 集合（約 32MB）全部打包進 `.output/server`，但全站實際只用到 8 個圖示，造成 image 體積浪費（image 已達約 1GB）。

## Root Cause

@nuxt/icon（1.11.0）預設 `serverBundle: 'auto'`，在部分建置環境下會對已安裝的 `@iconify-json/<set>` 集合產生「執行期 `require('@iconify-json/<set>/icons.json')`」的程式碼，而非把資料內嵌成本地 chunk。專案的 `@iconify-json/*` 全部放在 `devDependencies`，正式容器在執行階段 prune 掉 devDependencies 後，該 require 找不到模組即拋 `MODULE_NOT_FOUND` → 端點 500。

（補充：在乾淨重裝後本機重建時，@nuxt/icon 改為把集合內嵌成本地 chunk，所以本機重現不到；但此行為依賴建置環境、未明確設定，仍有回歸風險。同時內嵌完整集合即是 32MB 浪費的來源。）

## Proposed Solution

在 `nuxt.config.ts` 明確設定 @nuxt/icon，停用 server bundle、改以 client bundle 掃描只內嵌實際用到的圖示：

```
icon: {
  provider: 'iconify',
  serverBundle: false,
  clientBundle: {
    scan: true,
    sizeLimitKb: 256,
  },
}
```

- `serverBundle: false`：不再產生 server 圖示 bundle 與其執行期 `require`，徹底移除 `@iconify-json` 的 runtime 相依與 32MB 產物。
- `clientBundle.scan: true`：建置時掃描原始碼中的 `<Icon name="...">` 靜態字串，只把實際用到的圖示內嵌進 app bundle，SSR 與 client 皆可直接渲染、不需呼叫 API。
- `provider: 'iconify'` 搭配 `serverBundle: false` 提供保險：萬一有未掃描到的圖示，client 端才回退至公開 Iconify API。全站 9 個 `<Icon>` 用法皆為靜態字串，會被 scan 完整涵蓋，實務上不會觸發此回退。

`@iconify-json/*` 維持在 `devDependencies`（僅建置期掃描內嵌時需要，執行期不需要）。

## Non-Goals

- 不處理已修復的 `/news`、`/about-us` Vue 重複 runtime 500（已於 change `fix-news-aboutus-prod-500` 解決）。
- 不改動任何 `<Icon>` 的使用方式或頁面 UI；圖示外觀維持不變。
- 不移除任何 `@iconify-json/*` 套件，也不調整目前使用的 8 個圖示集合。
- 不改用其他圖示方案（例如手動 inline SVG 或更換圖示庫）。

## Success Criteria

- 重新 build 後以 production 模式啟動，對 `/api/_nuxt_icon/*` 的請求不再因 `Cannot find module '@iconify-json/...'` 而 500。
- 先前 log 中出現過的圖示（如 `material-symbols-light:close`、`heroicons:information-circle-20-solid`）在頁面上正常顯示，且不需要執行期存在 `@iconify-json/*` 模組。
- `.output/server` 不再打包完整 `@iconify-json` 集合（不再有約 32MB 的 `icons*.mjs` 集合 chunk）。
- `pnpm build` 成功且無新增建置錯誤；既有頁面（含 `/news`、`/about-us`、首頁）維持正常。

## Impact

- Affected specs: frontend-build-config（新增「icon 載入策略」需求）
- Affected code:
  - Modified: nuxt.config.ts（新增 icon 設定區塊）
