/**
 * @name NuxtJs v3.x
 * @desc Nuxt3 配置文件
 * @link https://ezdoc.cn/docs/nuxtjs/nuxt-config
*/

export default defineNuxtConfig({
  alias: {
    imgs: '/assets/imgs',
    icons: '/assets/icons',
    svgs: '/assets/svgs',
    styles: '/assets/styles',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'zh' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' },
        { rel: 'apple-touch-icon', href: '/images/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
    'styles/main.scss',
  ],

  modules: [
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  colorMode: { preference: 'system', classSuffix: '' },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },

  runtimeConfig: {
    apiSecret: 'yoAiwYIYYEX_g4YQtoquIGMeV57W-n-F',
    public: {
      apiBase: 'https://test.ztin.net',
    },
  },

  nitro: {
    // compressPublicAssets: true,
    prerender: {
      // crawlLinks: true,
      routes: ['/'],
    },
    // routeRules: { '/blog/**': { cache: { } } },
  },

  sourcemap: { server: true, client: false },
  typescript: { shim: false },

})
