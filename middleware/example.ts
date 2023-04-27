/**
* @name Middleware
* @param { to, from } 即将要进入的目标, 当前导航正要离开的路由.
* @desc Nuxt 提供了一个可定制的路由中间件框架，您可以在整个应用程序中使用它，非常适合在导航到特定路由之前提取要运行的代码。
* @see https://ezdoc.cn/docs/nuxtjs/dirs/middleware
*/

export default defineNuxtRouteMiddleware((to, from) => {
  if (to === from)
    return 'hello'
})
