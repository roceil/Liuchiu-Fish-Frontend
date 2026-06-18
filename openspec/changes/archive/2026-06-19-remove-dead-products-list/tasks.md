## 1. 移除死碼 productsList 與清理匯入

- [x] 1.1 刪除 constants/index.ts 的 `productsList` 靜態陣列匯出（含其上方 `// 商品列表...` 註解），並將首行 `import type { News, Product } from '~/types'` 改為僅匯入 `News`（`News` 仍被同檔 `newsList` 使用）。實作需求：Product catalog data is sourced only from the database。驗證：`grep -rn "productsList"` 全專案（排除 node_modules/.nuxt/.output）無任何定義或引用；`pnpm lint` 含 unused-imports 規則 0 errors。

## 2. 建置與頁面驗證

- [x] 2.1 執行 `pnpm build` 應成功完成；啟動後確認 `/shopping-mall`（商品列表）、`/shopping-mall/<有效數字 id>`（商品詳情）、詳情頁「相關商品」區塊皆正常由 Supabase 資料渲染，且相關商品連結目標為數字 id。實作需求：Product catalog data is sourced only from the database。
