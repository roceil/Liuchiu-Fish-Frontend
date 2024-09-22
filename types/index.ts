// 商品列表
export interface Product {
  id: number
  hotSale: boolean
  hotSaleNumber: number
  name: string
  price: number
}

// 最新消息
export interface News {
  id: number
  title: string
  tag: string
  date: string
}
