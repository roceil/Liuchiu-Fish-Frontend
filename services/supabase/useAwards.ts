import supabase from './index'

export function useAwards() {
  const getAwards = async () => {
    const { data: getAwardsData, error: getAwardsError } = await supabase.from('awards').select('*').order('id', { ascending: true })

    if (getAwardsError) {
      throw createError({
        statusCode: 500,
        message: getAwardsError.message,
      })
    }

    return getAwardsData
  }

  return {
    getAwards,
  }
}
