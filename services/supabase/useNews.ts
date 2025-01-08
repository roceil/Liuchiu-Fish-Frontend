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
  const getNews = async (_page = 0, _limit = 8) => {
    const { data: newsData, error } = await supabase
      .from('news')
      .select('*')
    // .range(page * limit, (page + 1) * limit - 1)

    if (error) {
      throw createError({
        statusCode: 500,
        message: error.message,
      })
    }

    const mappedData = newsData?.map(item => ({
      ...item,
      unit: useMappingUnit(item.unit),
    }))

    return mappedData
  }

  const getAllNewsIds = async () => {
    const { data: newsIds, error: newsIdsError } = await supabase
      .from('news')
      .select('id')

    if (newsIdsError) {
      throw createError({
        statusCode: 500,
        message: newsIdsError.message,
      })
    }

    return newsIds.map(item => item.id)
  }

  const getNewsById = async (id: number) => {
    const { data: newsIdData, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)

    if (error) {
      throw createError({
        statusCode: 500,
        message: error.message,
      })
    }

    return newsIdData?.map(item => ({
      ...item,
      unit: useMappingUnit(item.unit),
    }))
  }

  return {
    getNews,
    getNewsById,
    getAllNewsIds,
  }
}
