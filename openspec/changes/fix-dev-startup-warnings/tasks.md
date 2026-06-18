## 1. 修正 client bundle 機密外洩與 Vite 安全警告

- [x] 1.1 將 nuxt.config.ts 的 `vite.define` 由 `'process.env': process.env` 改為公開變數白名單物件（`NODE_ENV`、`NITRO_PUBLIC_NODE_ENV`、`NITRO_PUBLIC_SITE_URL`、`NITRO_PUBLIC_SUPABASE_URL`、`NITRO_PUBLIC_SUPABASE_ANON_KEY`、`NITRO_GOOGLE_ANALYTICS_ID`），使 client bundle 不再含機密且 `process.env` 仍為已定義物件。實作需求：Client bundle excludes non-public environment variables。驗證：重啟 `pnpm dev`，啟動 log 不再出現 "process.env contains PATH" 安全警告；執行 `pnpm build` 後於 `.output` 內以 grep 搜尋 `NITRO_SUPABASE_PASSWORD` 與 `PASSWORD` 應無命中。

## 2. 消除 ui 元件重名警告

- [x] 2.1 修正 shadcn-nuxt 造成的 ui 元件重名：在 nuxt.config.ts 的 modules 末端（shadcn-nuxt 之後）新增內聯模組，透過 `components:dirs` hook 移除 shadcn-nuxt unshift 的 components/ui 掃描目錄——該目錄帶 `extensions: []`，在 Nuxt 3.21 會被解析成 pattern `**/*.*` 而掃描所有 `.vue`，使 ui 元件以 bare 名稱重複註冊；並在 `components` 設定中對 `~/components` 加 `ignore: ['ui/**']` 避免多餘的 UiXxx 別名。ui 元件改由各 ui/*/index.ts（shadcn addComponent）統一提供。實作需求：UI library components register without name collisions。驗證：重啟 `pnpm dev` 啟動 log 不再出現任何 "Two component files resolving to the same name" 警告；首頁與 `/shopping-mall` 渲染 200、Button/Card/Tabs 等 ui 元件正常、Console 無未註冊元件錯誤（`.nuxt/components.d.ts` 中 Button 來自 `ui/button/index` 而非 `Button.vue`）。

## 3. 消除 card-3d 缺 index 檔警告

- [x] 3.1 新增 components/ui/card-3d/index.ts，重新匯出 `CardContainer`、`CardBody`、`CardItem`，使 shadcn-nuxt 逐目錄解析 index 時可解析 `card-3d`。實作需求：Every UI component subdirectory exposes an index module。驗證：重啟 `pnpm dev`，啟動 log 不再出現 `ENOENT ... components/ui/card-3d/index` 警告；首頁 IntroPort 的 3D 卡片仍正常顯示與互動。

## 4. 整體驗證

- [x] 4.1 完整重啟 `pnpm dev` 並比對啟動 log，確認四類目標警告（process.env PATH、Two component files ×10、card-3d ENOENT）皆消失且無新增警告或錯誤；執行 `pnpm lint` 應通過。
