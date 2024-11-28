import { appDescription } from './constants/index'

const { NITRO_PUBLIC_SITE_URL } = process.env

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
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
        { property: 'og:title', content: '琉球區漁會｜官方網站' },
        { property: 'og:description', content: appDescription },
        { property: 'og:image', content: `${NITRO_PUBLIC_SITE_URL}/og-image.png` },
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

  runtimeConfig: {
    public: {
      siteUrl: 'https://liuyu.org.tw',
      siteName: '琉球區漁會｜官方網站',
      siteLocale: 'zh-TW',
    },
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

  compatibilityDate: '2024-11-27',
})
