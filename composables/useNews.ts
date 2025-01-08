import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string,
)

export function useNews() {
  const getAllNewsIds = async () => {
    const { data, error } = await supabase
      .from('news')
      .select('id')

    if (error) {
      console.error('Error fetching news IDs from Supabase:', error)
      return []
    }

    return data.map(item => item.id)
  }

  return {
    getAllNewsIds,
  }
}
