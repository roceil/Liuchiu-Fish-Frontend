## Why

商品詳情頁在 production SSR 會丟出未妥善處理的 500：`H3Error: invalid input syntax for type bigint`（見 error.log，路由參數為 `"SSG004"`、`"undefined"` 等）。根因是詳情頁把非數字的路由參數送進以 bigint 主鍵查詢的 Supabase，且缺少輸入驗證與「查無商品」的 404 處理，使無效連結直接造成伺服器錯誤而非可預期的 404。

## What Changes

- **`getProductById` 加入輸入驗證與 404**：`services/supabase/useProducts.ts` 的 `getProductById` 先將 id 正規化並驗證為「正整數」；非數字、`undefined`、`NaN` 等一律視為查無，不送進 `.eq('id', ...)` 的 bigint 查詢；查無資料時以 `createError({ statusCode: 404 })` 回應，避免 Postgres 丟出 bigint 轉型錯誤造成 500。
- **詳情頁查無商品時回正規 404**：`pages/shopping-mall/[id].vue` 在 `useAsyncData` 取得結果為查無或錯誤時，以 404 呈現（`throw createError({ statusCode: 404 })`），不殘留壞頁或 500。
- **相關商品改用有效的 Supabase id 來源**：詳情頁的「相關商品」`randomProducts` 目前取自 `constants/index.ts` 的靜態 `productsList`（其 id 為 `SSG001`..`SSG004` 字串碼），會連到不存在於 DB 的 `/shopping-mall/SSG004`。改為由 Supabase 商品清單（`getProducts`，數字 id）取樣，確保所有 `/shopping-mall/[id]` 連結都使用有效的數字 id。

## Non-Goals

- **不處理 `/news`、`/about-us` 的 500**（`Cannot read properties of null (reading 'ce')` 與 Pinia `skipHydrate` 二次崩潰）：現行程式碼於 dev 無法重現（兩頁皆回 200），出事的是 5/31 的 prod build，需先以 prod 模式重現才能精準定位，故另立變更處理。
- **不更動 `constants/index.ts` 的 `productsList` 既有其他用途**：僅停止用它作為詳情頁相關商品的「連結來源」，不刪除該常數或其在他處的引用。
- **不重構為 Nuxt `runtimeConfig`**：環境變數取值方式不在本變更範圍。

## Capabilities

### New Capabilities

- `product-detail-lookup`: 規範商品詳情頁依路由 id 查詢商品的行為契約——有效數字 id 顯示商品、無效或不存在 id 回 404 而非 500、且站內導向詳情頁的連結僅使用有效的 Supabase 數字 id。

### Modified Capabilities

(none — 無既有 spec 行為變更)

## Impact

- Affected code:
  - Modified: services/supabase/useProducts.ts
  - Modified: pages/shopping-mall/[id].vue
  - New: (none)
  - Removed: (none)
- Affected systems: 商品詳情頁 SSR 與 Supabase 查詢。屬執行期錯誤處理修正，不變更商品資料結構或 DB schema。
