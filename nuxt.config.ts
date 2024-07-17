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
