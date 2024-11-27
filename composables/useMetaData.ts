import { appDescription, appName } from '@/constants'


interface SiteMetadata {
  description?: string
  title?: string
  image?: string
  url?: string
}

export function useSiteMetadata(options: SiteMetadata = {}) {
  const { NITRO_PUBLIC_SITE_URL } = process.env

  const defaultDescription = appDescription
  const defaultTitle = appName
  const defaultImage = `${NITRO_PUBLIC_SITE_URL}/og-image.png`
  const defaultUrl = NITRO_PUBLIC_SITE_URL


  const description = options.description || defaultDescription
  const title = options.title || defaultTitle
  const image = options.image || defaultImage
  const url = options.url || defaultUrl

  useSeoMeta({
    // 基本 SEO
    title,
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
