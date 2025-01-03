import supabase from './index'

export function useService() {
  const getFriendLinks = async () => {
    const { data: friendLinks, error } = await supabase
      .from('service')
      .select('*')
      .order('id', { ascending: false })

    if (error) {
      throw createError({
        statusCode: 500,
        message: error.message,
      })
    }

    return friendLinks
  }

  return {
    getFriendLinks,
  }
}
