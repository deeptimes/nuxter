/**
 * @name headMeta.global
 * @param { to, from } 即将要进入的目标, 当前导航正要离开的路由.
 * @desc Nuxt 提供了一个可定制的路由中间件框架，您可以在整个应用程序中使用它，非常适合在导航到特定路由之前提取要运行的代码。
 * @func 常用的完整的SEO标题包括: SEO标题 - 页面名称 - 父级栏目 - 网站标题名称
 * @example1 今日最新特价新鲜的西红柿价格 - 产品详情 - 水果蔬菜 - 强盛网络超市
 * @see https://ezdoc.cn/docs/nuxtjs/getting-started/seo-meta
 */

export default defineNuxtRouteMiddleware((to) => {
  const config = useAppConfig().site as App.site
  const baseURL = useRuntimeConfig().app.baseURL

  useHead({
    templateParams: {
      site: {
        title: config.title,
        url: config.domain + baseURL + to.fullPath,
        description: config.description,
        slogan: config.slogan,
      },
      separator: '-',
    },
    titleTemplate: '%s %separator %site.title｜%site.slogan',
    meta: [{ name: 'keywords', content: config.keywords }],
  })

  useSeoMeta({
    title: '', // 默认为空，将呈现：页面名称 + 站点名称
    description: '%site.description',
    ogTitle: '%s %separator %site.title',
    ogSiteName: '%site.title', // 站点名称
    ogType: 'article', // 默认文章类型
    ogDescription: '%site.description', // 默认描述
    ogUrl: '%site.url', // 站点URL
    ogLocale: 'zh', // 指定语言
  })
})
