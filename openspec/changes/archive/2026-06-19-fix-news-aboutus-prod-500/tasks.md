## Tasks

- [x] 1. 在 package.json 新增 `pnpm.overrides`，將 Vue 全家鎖定為單一版本 `3.5.35`：`vue`、`@vue/runtime-core`、`@vue/runtime-dom`、`@vue/server-renderer`、`@vue/compiler-core`、`@vue/compiler-dom`、`@vue/compiler-sfc`、`@vue/shared`、`@vue/reactivity`。完成條件：package.json 內存在對應 overrides 區塊，鍵值皆為 `3.5.35`。

- [x] 2. 執行 `pnpm install` 重新解析相依並更新 `pnpm-lock.yaml`。完成條件：install 成功無錯誤；`pnpm-lock.yaml` 有更新且納入提交。

- [x] 3. 驗證 Vue 已去重，以滿足 spec 需求「Build resolves a single Vue runtime version」（build 只解析單一 Vue runtime 版本）。完成條件：`node_modules/.pnpm` 下 `@vue+runtime-core@` 與 `@vue+runtime-dom@` 各只剩一個版本目錄（皆為 3.5.35）；專案頂層 `node_modules/vue` 指向 3.5.35。

- [x] 4. 執行 `pnpm build` 重新建置。完成條件：build 成功無新增錯誤；`.output/server/node_modules/.nitro` 下不再同時存在兩個 `@vue/runtime-core` 版本（只剩單一 Vue）。

- [x] 5. 以 production 模式於本機驗證修復。先載入 .env 環境變數，啟動 `node .output/server/index.mjs`，分別請求三個路由。完成條件：`GET /news` 與 `GET /about-us` 皆回 200 且回應不含 `Cannot read properties of null (reading 'ce')`；`GET /` 仍回 200。

- [x] 6. 更新記憶檔 `news-aboutus-prod-500-ce` 標記為已解決（根因＝重複 Vue runtime、修法＝pnpm.overrides 統一 3.5.35），保留供未來參考。完成條件：記憶檔內容已反映解決狀態。
