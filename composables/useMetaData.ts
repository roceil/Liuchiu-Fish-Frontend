import { appDescription, appName } from '@/constants'
import { useRuntimeConfig } from '#app'

interface SiteMetadata {
  description?: string
  title?: string
  image?: string
  url?: string
}

export function useSiteMetadata(options: SiteMetadata = {}) {
  const config = useRuntimeConfig()

  const defaultDescription = appDescription
  const defaultTitle = appName
  const defaultImage = `${config.public.siteUrl}/og-image.png`
  const defaultUrl = config.public.siteUrl

  const description = options.description || defaultDescription
  const title = options.title || defaultTitle
  const image = options.image || defaultImage
  const url = options.url || defaultUrl

  useSeoMeta({
    // 基本 SEO
    description,
    ogUrl: url,
    ogType: 'website',
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogSiteName: title,

    // Twitter
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })
}
