import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { unoBreakpoints } from './config/breakpoints'

import { rules, safelist, shortcuts, variants } from './config/unocss'

function currentColor(svg) {
  return svg.replace(/^<svg /, '<svg fill="currentColor" ')
}

export default defineConfig({
  shortcuts,
  outputToCssLayers: true,
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetUno({ preflight: true }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        roboto: ['Roboto', 'sans-serif'],
        robotoFlex: ['Roboto Flex Variable', 'sans-serif'],
        robotoCond: ['Roboto Condensed', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
    }),
    presetIcons({
      scale: 1.25,
      collections: {
        icon: FileSystemIconLoader('./assets/icons', currentColor),
        fab: () => import('@deeptimes/fapro').then(i => i.fab),
        fad: () => import('@deeptimes/fapro').then(i => i.fad),
        fal: () => import('@deeptimes/fapro').then(i => i.fal),
        fas: () => import('@deeptimes/fapro').then(i => i.fas),
      },
    }),
  ],
  theme: {
    colors: {
      light: {
        50: 'rgb(252,253,255)',
        100: 'rgb(241,243,245)',
        200: 'rgb(230,232,235)',
        300: 'rgb(200,202,206)',
        400: 'rgb(180,180,180)',
        500: 'rgb(150,150,150)',
        600: 'rgb(112,112,116)',
        700: 'rgb(82,82,91)',
        800: 'rgb(63,63,70)',
        900: 'rgb(39,39,42)',
        950: 'rgb(39,39,42)',
      },
      dark: {
        50: 'rgb(250,250,250)',
        100: 'rgb(220,225,235)',
        200: 'rgb(180,185,195)',
        300: 'rgb(140,145,155)',
        400: 'rgb(100,105,115)',
        500: 'rgb(60,60,64)',
        600: 'rgb(28,28,30)',
        700: 'rgb(25,25,27)',
        800: 'rgb(22,22,23)',
        900: 'rgb(17,17,18)',
        950: 'rgb(15,15,17)',
      },
    },
    breakpoints: unoBreakpoints,
  },
  safelist,
})
