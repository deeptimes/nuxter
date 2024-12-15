const unocss = {
  /* Container */
  'container': 'w-full sx:px-4 sl:px-6 sm:px-8 sd:max-w-992px md:max-w-1184px lg:max-w-1224px xl:max-w-1248px hd:max-w-1408px mx-auto',

  /* 绝对定位 */
  'abs-yc': 'absolute top-1/2 transform -translate-y-1/2',
  'abs-xc': 'absolute left-1/2 transform -translate-x-1/2',
  'abs-xy': 'absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2',

  /* Underline */
  'underline': 'underline underline-dashed underline-offset-0.35em underline-transparent underline-1px',

  /* Layout */
  // 'layout': 'min-h-screen flex flex-col duration-250 light:bg-light-50 dark:bg-dark-600',

  //   'form-wrap': 'mt-4 xs:mt-8',
  //   'form-grids': 'grid grid-cols-1 gap-x-8 gap-y-6 xs:grid-cols-2',
  //   'item-group': 'flex flex-col gap-8 xs:flex-row',
  //   'form-item': 'shrink-0',
  //   'form-submit': 'mt-8 w-full flex gap-x-4 xs:w-max',

  /* 按钮 */
  // 'btn': 'inline-block cursor-pointer',
  // 'btn-border-dashed': 'border-dashed',

  /* 翻页 */
  // 'uno-pagination': 'px-3 py-2 light:(bg-light-200 hover:bg-light-300) dark:(bg-dark-500/50 hover:bg-dark-700/50)',

  /* Drawer */
  'use-slide': 'translate-x-0 transform-gpu transition-transform duration-300',
}

const primevue = {
  'pv-button': '',
  'pv-radio-button': '',
  'pv-breadcrumb': '',
  'pv-menu': '',
  'pv-inputtext': 'w-full font-roboto',
  'pv-password': 'w-full font-roboto',
  'pv-menubar': 'cursor-pointer',
  'pv-drawer-mask': 'backdrop-blur-sm',
  'pv-dialog-mask': 'backdrop-blur-sm',
}

const shortcuts = { ...unocss, ...primevue }

export default shortcuts
