/**
 * @name Nuxt.Config.Uno
 * @link https://ezdoc.cn/docs/nuxtjs/nuxt-config
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */

export default defineNuxtConfig({
  css: [
    '@fontsource/roboto/100-italic.css',
    '@fontsource/roboto/300-italic.css',
    '@fontsource/roboto/400-italic.css',
    '@fontsource/roboto/500-italic.css',
    '@fontsource/roboto/700-italic.css',
    '@fontsource/roboto/900-italic.css',
    './assets/styles/reset.scss',
    './assets/styles/prose.scss',
    './assets/styles/base.scss',
  ],

  modules: [
    '@unocss/nuxt',

  ],

  unocss: {
    nuxtLayers: true,
  },
})
