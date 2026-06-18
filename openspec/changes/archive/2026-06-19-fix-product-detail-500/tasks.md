## 1. getProductById 輸入驗證與 404

- [x] 1.1 在 services/supabase/useProducts.ts 的 `getProductById` 加入 id 正規化與驗證：將參數轉為數字並僅接受正整數，對非數字字串（如 `SSG004`）、`undefined`、`NaN` 直接視為查無、不送進 `.eq('id', ...)` 查詢；查無資料時以 `createError({ statusCode: 404 })` 回應，使非法 id 不再觸發 Postgres bigint 轉型而回 500。實作需求：Invalid or unknown product id yields 404 not 500。驗證：對 `getProductById('SSG004')`、`getProductById(undefined)`、`getProductById('999999')`（不存在的數字）皆得到 404 結果且 error.log 無 "invalid input syntax for type bigint"；對存在的數字 id 仍正常回傳商品。

## 2. 詳情頁 404 呈現與相關商品來源修正

- [x] 2.1 在 pages/shopping-mall/[id].vue，當 `useAsyncData('product', ...)` 取得查無或 404 錯誤時，以 `throw createError({ statusCode: 404 })` 呈現正規 404；有效數字 id 命中商品時維持原本詳情渲染（200）。實作需求：Product detail page resolves a valid numeric product id。驗證：`/shopping-mall/<不存在或非數字 id>` 回 404 錯誤頁、`/shopping-mall/<有效數字 id>` 回 200 並顯示商品名稱/價格。
- [x] 2.2 將 pages/shopping-mall/[id].vue 的相關商品 `randomProducts` 來源由 `constants/index.ts` 的靜態 `productsList`（id 為 SSG 字串碼）改為 Supabase 商品清單（`getProducts`，數字 id）取樣，使 ShopRandomProduct 產生的連結都指向有效數字 id。實作需求：Internal links to product detail use valid product ids。驗證：詳情頁相關商品每個連結的目標為存在於 DB 的數字 id，點擊後回 200；頁面不再出現連往 `/shopping-mall/SSG00x` 的連結。

## 3. 整體驗證

- [x] 3.1 以 production 模式（`pnpm build` 後 `node .output/server/index.mjs` 或 `pnpm preview`）重現原始情境並確認修復：依序請求 `/shopping-mall/SSG004`、`/shopping-mall/`（缺參數情境對應路由）、一個有效數字 id 與一個不存在數字 id；確認非法/不存在情境回 404、有效情境回 200，且伺服器 log 無 `H3Error: invalid input syntax for type bigint`。並執行 `pnpm lint` 應通過。
