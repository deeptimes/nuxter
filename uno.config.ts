import { mergeConfigs } from '@unocss/core'
import { defineConfig, presetIcons } from 'unocss'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  // your overrides
  theme: {
    colors: {
      brand: {
        primary: '#000',
        secondary: '#111',
        accent: '#E67818',
      },
    },
  },
}])
