/**
 * @name UnoCss v0.5x +
 * @link https://github.com/unocss/unocss
 * @desc The instant on-demand atomic CSS engine.
 * @config by https://github.com/deeptimes/nuxter-plus
*/
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

function currentColor(svg: string): string {
  return svg.replace(/^<svg /, '<svg fill="currentColor" ')
}
export default defineConfig({
  shortcuts: [
    // 绝对定位
    ['abs-yc', 'absolute top-1/2 transform -translate-y-1/2'], // 垂直居中
    ['abs-xc', 'absolute left-1/2 transform -translate-x-1/2'], // 水平居中
    ['abs-xy', 'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'], // 绝对居中
    ['btn', 'inline-block cursor-pointer'],
  ],
  rules: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts(),
    presetIcons({
      scale: 1.2,
      collections: {
        icon: FileSystemIconLoader('./assets/icons', currentColor),
      },
    }),
  ],
  theme: {
    colors: {
      brand: {
        primary: '#2D52A3',
        paint: '#D976AD',
      },
    },
    breakpoints: { xs: '640px', sm: '768px', md: '1024px', lg: '1280px', xl: '1320px' },
  },
  transformers: [
    transformerDirectives({ enforce: 'pre' }),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left mt-2 '.split(' '),
})
