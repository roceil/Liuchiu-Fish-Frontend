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
          // unhead v2 將 inline script 內容的 key 由 `children` 改為 `innerHTML`
          innerHTML: `window.dataLayer = window.dataLayer || [];
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
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    'nuxt-marquee',
    'nuxt-aos',
    'nuxt-easy-lightbox',
    '@nuxtjs/seo',

    // 內聯模組（置於 shadcn-nuxt 之後）：移除 shadcn-nuxt 加入的 components/ui 掃描目錄。
    // 該目錄帶 extensions:[]，在 Nuxt 3.21 會被解析成 pattern '**/*.*' 而掃描所有檔案（含 .vue），
    // 使 ui 元件以 bare 名稱（Button、Card…）被重複註冊，與 shadcn 透過各 ui/*/index.ts 註冊的
    // 同名元件衝突，產生「Two component files resolving to the same name」警告。
    // 移除此掃描目錄即可消除警告；ui 元件仍由 shadcn 的 index.ts 提供。
    (_inlineOptions, nuxt) => {
      nuxt.hook('components:dirs', (dirs) => {
        for (let i = dirs.length - 1; i >= 0; i--) {
          const dir = dirs[i]
          const dirPath = typeof dir === 'string' ? dir : dir.path
          if (typeof dirPath === 'string' && dirPath.replace(/\\/g, '/').endsWith('/components/ui'))
            dirs.splice(i, 1)
        }
      })
    },
  ],

  // ~/components 預設掃描忽略 ui 目錄（ui 元件由 shadcn 的 index.ts 提供），
  // 避免重複註冊與多餘的 UiXxx 別名。
  components: [
    {
      path: '~/components',
      // ignore 樣式相對於上方 path（~/components）匹配，故用 'ui/**'。
      ignore: ['ui/**'],
    },
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

  // 圖示改以 client bundle 內嵌（掃描原始碼中實際用到的 <Icon name="...">），
  // 並停用 server bundle。原因：@nuxt/icon 在某些建置環境會對已安裝集合 emit
  // 執行期 require('@iconify-json/<set>/icons.json')，而 @iconify-json/* 置於
  // devDependencies，正式容器 prune devDeps 後即 MODULE_NOT_FOUND，使
  // /api/_nuxt_icon/* 回 500；且預設會把完整集合（約 32MB）打包進 server 產物。
  // 全站 <Icon> 皆為靜態字串，scan 可完整內嵌，故 serverBundle 可安全停用。
  icon: {
    provider: 'iconify',
    serverBundle: false,
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
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
    // aos 為純 CJS（無 ESM exports），Vite 7 下需同時 transpile + optimizeDeps.include
    // 才能解決 "does not provide an export named 'default'"
    transpile: ['@headlessui/vue', 'aos'],
  },

  vite: {
    // 僅注入前端真正需要的「公開」環境變數，而非整個 process.env。
    // 原本 `'process.env': process.env` 會把 PASSWORD、NITRO_SUPABASE_PASSWORD 等
    // 機密一併打包進前端 bundle 造成外洩，也觸發 Vite 的 "process.env contains PATH" 安全警告。
    // 改為白名單物件後：process.env 仍是已定義物件（存取未列出的 key 只會得到 undefined，不會 ReferenceError），
    // 但不再外洩機密，警告也消除。
    define: {
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
        NITRO_PUBLIC_NODE_ENV: process.env.NITRO_PUBLIC_NODE_ENV,
        NITRO_PUBLIC_SITE_URL: process.env.NITRO_PUBLIC_SITE_URL,
        NITRO_PUBLIC_SUPABASE_URL: process.env.NITRO_PUBLIC_SUPABASE_URL,
        NITRO_PUBLIC_SUPABASE_ANON_KEY: process.env.NITRO_PUBLIC_SUPABASE_ANON_KEY,
        NITRO_GOOGLE_ANALYTICS_ID: process.env.NITRO_GOOGLE_ANALYTICS_ID,
      },
    },
    // aos 為 CommonJS，Vite 7 在 dev 預打包時找不到 default export。
    // aos 是由 nuxt-aos（未被 optimize 的套件）import，故需用巢狀語法
    // 'nuxt-aos > aos' 明確要求 Vite 預打包它，修正 "does not provide an export named 'default'"。
    optimizeDeps: {
      include: ['aos', 'nuxt-aos > aos'],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        // types: [],
      },
      // 已停用的 nuxt-og-image 仍會被 nuxt 納入型別檢查，但其虛擬模組 #og-image/shared
      // 未註冊，會產生型別錯誤；停用後將其元件排除於 type check 之外。
      exclude: ['../node_modules/.pnpm/nuxt-og-image@*/**'],
    },
  },

  site: {
    name: '琉球區漁會',
    url: process.env.NITRO_PUBLIC_SITE_UR || 'https://liuyu.org.tw',
    defaultLocale: 'zh-TW',
  },

  // nuxt-og-image 未被使用（og:image 由 useSeoMeta 直接設定靜態圖），
  // 且舊版 nuxt-og-image@4.2.0（來自 @nuxtjs/seo@2.0.2）與 Nuxt 3.21.6 的 unenv 不相容會導致 build 失敗，
  // 故停用此子模組：同時移除其安全漏洞且不影響功能。
  ogImage: {
    enabled: false,
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
