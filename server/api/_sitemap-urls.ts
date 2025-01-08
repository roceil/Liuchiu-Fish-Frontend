import { createClient } from '@supabase/supabase-js'

export default defineSitemapEventHandler(async () => {
  const supabaseUrl = process.env.NITRO_PUBLIC_SUPABASE_URL as string
  const supabaseKey = process.env.NITRO_PUBLIC_SUPABASE_ANON_KEY as string
  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data: newsIds, error: _newsIdsError } = await supabase
    .from('news')
    .select('id')

  const urls = newsIds?.map(newsItem => ({
    loc: `/news/${newsItem.id}`,
    lastmod: new Date(),
  })) || []

  return urls
})
