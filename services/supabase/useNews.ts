import supabase from './index'
import useMappingUnit from '~/composables/useMappingUnit'

export interface NewsData {
  id: number
  title: string
  unit: {
    name: string
    style: {
      backgroundColor: string
      borderColor: string
      color: string
    }
    key: number
    value: string
  }
  date: string
  content: string
  image_url: string
  created_at: string
  updated_at: string
}

export function useNews() {
  const getNews = async (page = 0, limit = 8) => {
    return await useAsyncData(
      `news-${page}`,
      async () => {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .range(page * limit, (page + 1) * limit - 1)

        const mappedData = data?.map(item => ({
          ...item,
          unit: useMappingUnit(item.unit),
        }))

        return {
          data: mappedData,
          error,
        }
      },
    )
  }

  const getNewsById = async (id: number) => {
    return await useAsyncData(
      `news-${id}`,
      async () => {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('id', id)

        const mappedData = data?.map(item => ({
          ...item,
          unit: useMappingUnit(item.unit),
        }))

        return {
          data: mappedData,
          error,
        }
      },
    )
  }

  return {
    getNews,
    getNewsById,
  }
}
