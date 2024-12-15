/**
 * @name Nuxt.Config.Base
 * @link https://ezdoc.cn/docs/nuxtjs/nuxt-config
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'zh' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/images/favicon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'format-detection', content: 'email=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    storage: 'cookie',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

})
