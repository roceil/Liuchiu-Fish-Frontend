## Why

`constants/index.ts` 的靜態 `productsList` 已成死碼。完成 `fix-product-detail-500` 後，`pages/shopping-mall/[id].vue` 不再 import 它（相關商品改用 Supabase `getProducts` 的數字 id），全專案搜尋僅剩其在 `constants/index.ts` 的定義本身、無任何消費者。它是 Supabase 串接前的舊 mock data：欄位為舊版（`hotSale`/`hotSaleNumber`，與 DB 的 `isHotSale`/`hotSaleRank` 不符），id 為 `MAHI`/`SSG` 等字串碼（DB 不存在，正是先前 `/shopping-mall/SSG004` bigint 500 的連結來源）。保留會誤導開發者並可能再被誤用而重蹈覆轍。

## What Changes

- 刪除 `constants/index.ts` 中的 `productsList` 靜態陣列匯出及其上方註解。
- 移除因此變成未使用的型別匯入：將 `constants/index.ts` 第一行的 `import type { News, Product } from '~/types'` 改為只匯入 `News`（`News` 仍被同檔的 `newsList` 使用）。

## Non-Goals

- 不刪除 `~/types` 內的 `Product` 型別定義本身（仍被 `components/Shop/ShopRandomProduct.vue`、`services/supabase/useProducts.ts` 等使用）。
- 不刪除 `public/shop/products/` 下的圖片資產（可能他處引用，另案評估）。
- 不更動 Supabase 真實商品資料、`services/supabase/useProducts.ts`，亦不處理同檔其他靜態常數（如 `newsList`）。

## Capabilities

### New Capabilities

- `product-data-source`: 規範商品型錄資料來源的不變式——商品資料一律來自資料庫（Supabase），程式碼不得保留任何寫死的商品清單常數。

### Modified Capabilities

(none — 無既有 spec 行為變更)

## Impact

- Affected code:
  - Modified: constants/index.ts
  - New: (none)
  - Removed: (none)
- Affected systems: 前端建置與商品相關頁面。屬死碼清理，移除後商品列表、詳情、相關商品仍由 Supabase 提供，使用者可見行為不變。
