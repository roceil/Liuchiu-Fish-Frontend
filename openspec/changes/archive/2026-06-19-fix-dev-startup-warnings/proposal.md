## Why

執行 `pnpm dev` 啟動時出現多項警告，其中一項是真實的**安全外洩**：`nuxt.config.ts` 以 `vite.define: { 'process.env': process.env }` 將整個 `.env`（包含 `NITRO_SUPABASE_PASSWORD` 資料庫密碼與 `PASSWORD`）打包進前端 bundle。其餘為 shadcn-nuxt 與 Nuxt 元件自動匯入機制衝突、缺少 index 檔所造成的雜訊警告，會掩蓋真正重要的訊息、降低團隊對警告的敏感度。

## What Changes

- **修正機密外洩與 Vite 安全警告**：將 `nuxt.config.ts` 的 `vite.define` 由注入整個 `process.env`，改為僅注入公開變數白名單（`NODE_ENV`、`NITRO_PUBLIC_NODE_ENV`、`NITRO_PUBLIC_SITE_URL`、`NITRO_PUBLIC_SUPABASE_URL`、`NITRO_PUBLIC_SUPABASE_ANON_KEY`、`NITRO_GOOGLE_ANALYTICS_ID`）。`process.env` 仍維持為已定義物件，存取未列出的 key 只會得到 `undefined`，不會產生 ReferenceError，故現有前端程式碼行為不變。
- **消除元件重名警告**：在 `nuxt.config.ts` 新增 `components` 設定，於 `~/components` 掃描中 `ignore` 掉 `components/ui` 目錄下的 `.vue`。ui 元件已由 shadcn-nuxt 透過各 `components/ui/*/index.ts` 統一註冊，避免預設掃描以相同名稱（Button、Card、Tabs 等）重複註冊而觸發「Two component files resolving to the same name」警告（共 10 個）。
- **消除 card-3d 缺檔警告**：新增 `components/ui/card-3d/index.ts`，重新匯出 `CardContainer`、`CardBody`、`CardItem`。`card-3d` 是 `components/ui` 下唯一缺少 index 檔的子目錄，shadcn-nuxt 逐目錄解析 index 時會拋出 `ENOENT ... card-3d/index` 警告。

## Non-Goals

- **不重構為 Nuxt `runtimeConfig`**：雖然以 `useRuntimeConfig()` 取代前端 `process.env` 取值是更慣用的長期做法，但牽涉多檔改動與 Docker 環境變數對應測試，本變更僅以最小幅度消除安全外洩與警告，不做此重構。
- **不處理 `composables/useNews.ts` 重複壞檔**：該檔為未被使用、且引用了 `.env` 不存在之 `SUPABASE_URL`/`SUPABASE_KEY` 的重複實作（實際使用的是 `services/supabase/useNews.ts`）。它不是啟動警告來源，且改動會影響 sitemap 行為，故另案處理。採用白名單物件式 `define` 後，此檔行為與現況一致（取得 `undefined`），不會因本變更而損壞。
- **不處理 `get-port` 改用 3001 的訊息**：該訊息為 3000 連接埠已被其他執行中的 dev server 佔用所致，屬環境狀態而非程式問題，不在本變更範圍。

## Capabilities

### New Capabilities

- `frontend-build-config`: 規範前端建置健全性不變式——client bundle 僅注入公開環境變數白名單、ui 元件僅單一註冊不重名、每個 `components/ui` 子目錄具備可解析的 index 模組。

### Modified Capabilities

(none — 不涉及既有 spec 行為變更)

## Impact

- Affected code:
  - Modified: nuxt.config.ts
  - New: components/ui/card-3d/index.ts
  - Removed: (none)
- Affected systems: 前端建置（Vite/Nuxt 元件自動匯入、client bundle 環境變數注入）。屬 dev/build 設定層級，不變更執行期應用行為。
