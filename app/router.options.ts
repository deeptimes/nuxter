import type { RouterConfig } from '@nuxt/schema'

// https://router.ezdoc.cn/docs/api/interfaces/RouterOptions.html
export default <RouterConfig>{
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 50,
          })
        }, 500)
      })
    }
    else {
      return {
        top: 0,
      }
    }
  },
}
