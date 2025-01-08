import supabase from './index'

export interface Product {
  id: string
  productId: string
  isHotSale: boolean
  hotSaleRank: number
  name: string
  price: number
  cover: string
  unit: string
  intro: ProductIntro[]
}

export interface ProductIntro {
  subTitle: string
  subImage: string[] | string
  description: string
}

export function useProducts() {
  const filterProductsByHotSale = (products: Product[], isHot: boolean) => {
    return products?.filter(p => p.isHotSale === isHot) || []
  }

  const sortByHotSaleRank = (products: Product[]) => {
    return products.sort((a, b) => a.hotSaleRank - b.hotSaleRank)
  }

  const getProducts = async () => {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')

    if (error) {
      throw createError({
        statusCode: 500,
        message: error.message,
      })
    }

    const hotSaleProducts = filterProductsByHotSale(products, true)
    const normalProducts = filterProductsByHotSale(products, false)
    const sortedHotSale = sortByHotSaleRank(hotSaleProducts)

    return [...sortedHotSale, ...normalProducts]
  }

  const getProductById = async (id: string | string[]) => {
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)

    if (error) {
      throw createError({
        statusCode: 500,
        message: error.message,
      })
    }

    return product[0]
  }

  return {
    getProducts,
    getProductById,
  }
}
