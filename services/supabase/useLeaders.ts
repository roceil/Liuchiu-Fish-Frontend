import supabase from './index'

export function useLeaders() {
  const getLeaders = async () => {
    const { data: leaders, error } = await supabase
      .from('leaders')
      .select('*')

    if (error) {
      throw createError({
        statusCode: 500,
        message: error.message,
      })
    }

    return leaders
  }

  return {
    getLeaders,
  }
}
