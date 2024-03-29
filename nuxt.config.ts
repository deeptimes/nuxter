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
    'styles/prose.scss',
    'styles/main.scss',
  ],

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  content: {
    markdown: { toc: { depth: 2, searchDepth: 3 } },
    highlight: {
      theme: { default: 'one-dark-pro', dark: 'one-dark-pro' },
      preload: ['ts', 'js', 'css', 'html', 'vue', 'scss', 'bash', 'json', 'md', 'yaml', 'python'],
    },
  },

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
    // langDir: 'locales',
    langDir: 'langs',
    lazy: true,
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh.json',
        name: '中文',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
        name: 'Français',
      },
    ],
    // trailingSlash: true,
    debug: false,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    // strategy: 'prefix',
    // strategy: 'prefix_and_default',
    // strategy: 'prefix_except_default',
    // rootRedirect: '/ja/about-ja',
    dynamicRouteParams: true,
    // customRoutes: 'config',

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
