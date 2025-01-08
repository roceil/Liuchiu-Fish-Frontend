import { appDescription } from './constants/index'

const { NITRO_PUBLIC_SITE_URL } = process.env

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      titleTemplate: '%s',
      htmlAttrs: {
        lang: 'zh-TW',
      },
      meta: [
        // 設置 icon
        { name: 'favicon', content: '/favicon.ico' },
        { name: 'description', content: appDescription },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // 語系
        { property: 'og:locale', content: 'zh-TW' },
        { 'http-equiv': 'Content-Language', 'content': 'zh-TW' },
        { name: 'language', content: 'zh-TW' },

        // 設置 Open Graph 元資料
        { property: 'og:url', content: NITRO_PUBLIC_SITE_URL },
        { property: 'og:title', content: '琉球區漁會' },
        { property: 'og:description', content: appDescription },
        { property: 'og:image', content: `${NITRO_PUBLIC_SITE_URL}/og-image.png` },
        { property: 'og:site_name', content: '琉球區漁會' },

        // Google Analytics
        { name: 'title', content: '琉球區漁會' },
        { name: 'application-name', content: '琉球區漁會' },
      ],

      // Google Analytics
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-${process.env.NITRO_GOOGLE_ANALYTICS_ID}`,
          async: true,
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-${process.env.NITRO_GOOGLE_ANALYTICS_ID}');`,
        },
      ],
    },
  },

  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    'nuxt-marquee',
    'nuxt-aos',
    'nuxt-easy-lightbox',
    '@nuxtjs/seo',
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  googleFonts: {
    families: {
      'Montserrat': [400, 700, 900],
      'Noto+Sans+TC': [400, 700],
      'Noto+Serif+TC': [400, 700],
    },
    display: 'swap', // 自定義字體加載完成之前先使用一個後備字體
    download: false, // 不要下載字體文件到本地使用 CDN
  },

  aos: {
    duration: 500,
    easing: 'ease-in-out',
    once: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['@/assets/css/main.css'],

  pinia: {
    storesDirs: ['./store/**'],
  },

  build: {
    transpile: ['@headlessui/vue'],
  },

  vite: {
    define: {
      'process.env': process.env,
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        // types: [],
      },
    },
  },

  site: {
    name: '琉球區漁會',
    url: process.env.NITRO_PUBLIC_SITE_UR || 'https://liuyu.org.tw',
    defaultLocale: 'zh-TW',
  },

  sitemap: {
    enabled: process.env.NITRO_PUBLIC_NODE_ENV === 'production',
    sources: ['/api/_sitemap-urls'],
    urls: [],
    exclude: [
      '/admin/**',
      '/404',
    ],
    autoLastmod: true,
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
    },
  },

  robots: {
    sitemap: ['https://liuyu.org.tw/sitemap.xml'],
  },

  compatibilityDate: '2024-11-27',
})
