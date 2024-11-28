// 商品列表
export interface Product {
  id: string
  hotSale: boolean
  hotSaleNumber: number
  cover: string
  name: string
  price: number
  unit: string
  intro: {
    subImage: string[]
    subTitle: string
    description: string
  }[]
}

// 最新消息
export interface News {
  id: number
  title: string
  tag: string
  date: string
}
