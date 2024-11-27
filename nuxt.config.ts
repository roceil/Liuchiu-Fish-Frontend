import { appDescription } from './constants/index'

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      meta: [
        { name: 'description', content: appDescription },
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
})
