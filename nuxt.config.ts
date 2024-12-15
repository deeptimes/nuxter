/**
 * @name Nuxt.Config.Root
 * @link https://ezdoc.cn/docs/nuxtjs/nuxt-config
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */
import process from 'node:process'

export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },

  modules: [
    '@nuxtjs/device',
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['stores'],
  },
})
