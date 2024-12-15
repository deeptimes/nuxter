/**
 * @name Nuxt.Config.Primevue
 * @link https://ezdoc.cn/docs/nuxtjs/nuxt-config
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */

import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  modules: [
    '@primevue/nuxt-module',
  ],
  primevue: {
    autoImport: true,
    components: {
      prefix: 'Pv',
      include: ['Button'],
    },
    directives: {
      include: ['Ripple', 'Tooltip'],
    },
    importPT: { as: 'globalPT', from: resolve('./config/globalPass') },
    importTheme: { as: 'themeEzo', from: resolve('./config/themeEzo') },
  },
})
