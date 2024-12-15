/* Fontawesome */
const faTypes = ['fal', 'far', 'fas', 'fat', 'fad']
const faBrand = ['github', 'wexin', 'google', 'apple', 'qq']
const faIcons = ['coins', 'user', 'globe-pointer', 'heart', 'ballot-check', 'cloud-arrow-down', 'id-card', 'shield-keyhole', 'right-from-bracket', 'biohazard', 'message-dots']

/* Local Svgs */
const localSns = ['discord', 'twitter', 'youtube', 'weixin', 'qq', 'github']
const cates = ['3ds', 'codes', 'fonts', 'iconsets', 'illustrations', 'mockups', 'presentations', 'themes', 'uikits', 'wireframes']
const exts = ['_3dstudiomax', 'aftereffects', 'blender', 'cinema4d', 'figma', 'framer', 'illustrator', 'indesign', 'keynote', 'lunacy', 'maya', 'photoshop', 'powerpoint', 'react', 'sketch', 'spline', 'swift', 'xcode', 'xd']
const pays = ['alipay', 'wxpay', 'paypal', 'balance']

/* All Icons */
function genIcons(name: string, types: string[]) {
  return types.map(type => `i-${type}-${name}`)
}
const icons = [
  ...faIcons.flatMap(param => genIcons(param, faTypes)),
  ...faBrand.map(str => `i-fab-${str}`),
  ...localSns.map(str => `i-sns-${str}`),
  ...cates.map(str => `i-cates-${str}`),
  ...exts.map(str => `i-exts-${str}`),
  ...pays.map(str => `i-pays-${str}`),
]

/**
 * Transition Class
 * 按参数生成响应的类名
 */
function genTrans(name: string, types: string[]) {
  return types.map(type => `${name}-${type}`)
}
const trsAll = ['fade', 'slide-t', 'slide-r', 'slide-b', 'slide-l']
const trsMotions = ['enter-from', 'leave-to', 'enter-to', 'leave-from', 'enter-active', 'leave-active']
const transition = trsAll.flatMap(param => genTrans(param, trsMotions))

/* UnoCss */
const uno = [
  'aspect-3/2',
  'font-mono',
  ...Array.from({ length: 16 }, (_, i) => `gap-${i * 2}`),
  ...Array.from({ length: 6 }, (_, i) => `grid-cols-${i + 1}`),
]

/**
 * *****************
 */

/* 统一导出 */
export const safelist = [
  ...icons,
  ...transition,
  ...uno,
]
