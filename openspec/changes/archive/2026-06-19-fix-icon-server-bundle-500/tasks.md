## Tasks

- [x] 1. 在 `nuxt.config.ts` 新增 `icon` 設定區塊：`provider: 'iconify'`、`serverBundle: false`、`clientBundle: { scan: true, sizeLimitKb: 256 }`，以滿足 spec 需求「Icons are bundled client-side, not required from the server at runtime」。完成條件：nuxt.config.ts 內存在對應的 `icon` 設定，且 `serverBundle` 為 `false`、`clientBundle.scan` 為 `true`。

- [x] 2. 執行 `pnpm build` 重新建置。完成條件：build 成功無新增錯誤；`.output/server/chunks/_/` 下不再有完整 `@iconify-json` 集合的 `icons*.mjs`（每集合數 MB 的圖示資料）；產物中不再出現 `require('@iconify-json/...')`。

- [x] 3. 以 production 模式於本機驗證 icon 端點與顯示。先載入 .env 環境變數，啟動 `node .output/server/index.mjs`，請求先前失敗的圖示端點（例如 `GET /api/_nuxt_icon/material-symbols-light.json?icons=close`）並請求至少一個含 `<Icon>` 的頁面。完成條件：server log 無 `Cannot find module '@iconify-json/...'` 與 `MODULE_NOT_FOUND`；含 `<Icon>` 的頁面回 200 且 HTML 內含對應的內嵌 SVG 圖示。

- [x] 4. 確認既有頁面未受影響。完成條件：`GET /`、`GET /news`、`GET /about-us` 在同一個 production server 下皆回 200。
