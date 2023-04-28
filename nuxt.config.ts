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
    '@nuxtjs/i18n',
  ],

  runtimeConfig: {
    apiSecret: '',
    public: { apiBase: '' },
  },

  nitro: {
    // compressPublicAssets: true,
    prerender: {
      // crawlLinks: true,
      routes: ['/'],
    },
    // routeRules: { '/blog/**': { cache: { } } },
  },

  i18n: {
    experimental: {
      jsTsFormatResource: true,
    },
    precompile: {
      strictMessage: false,
      escapeHtml: true,
    },
    langDir: 'locales',
    lazy: true,
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        // domain: 'localhost',
        name: 'English',
      },
      {
        code: 'en-GB',
        iso: 'en-GB',
        files: ['en.json', 'en-GB.js', 'en-KK.js'],
        name: 'English (UK)',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja.ts',
        domain: 'mydomain.com',
        name: 'Japanses',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
        domain: 'mydomain.fr',
        name: 'Français',
      },
    ],
    // trailingSlash: true,
    debug: false,
    defaultLocale: 'en',
    // strategy: 'no_prefix',
    // strategy: 'prefix',
    // strategy: 'prefix_and_default',
    strategy: 'prefix_except_default',
    // rootRedirect: '/ja/about-ja',
    dynamicRouteParams: true,
    // customRoutes: 'config',
    pages: {
      history: {
        ja: '/history-ja',
      },
      about: {
        ja: '/about-ja',
      },
    },
    // differentDomains: true,
    // skipSettingLocaleOnNavigate: true,
    // detectBrowserLanguage: false,
    detectBrowserLanguage: {
      useCookie: true,
      // alwaysRedirect: true
      // cookieKey: 'i18n_redirected',
      // // cookieKey: 'my_custom_cookie_name',
      // redirectOn: 'root'
    },
    vueI18n: './configs/i18n.options.ts',
  },

  colorMode: { preference: 'system', classSuffix: '' },

  pinia: { autoImports: ['defineStore', 'acceptHMRUpdate'] },

  sourcemap: { server: true, client: false },

  typescript: { shim: false },

})
