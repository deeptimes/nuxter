/**
 * @name App.config
 * @desc: 提供运行时应用程序配置
 * @refer https://ezdoc.cn/docs/nuxtjs/dirs/app-config
 */
import pkg from '~/package.json'

export default defineAppConfig({
  site: {
    name: pkg.name,
    description: pkg.description,
    keywords: pkg.site.keywords,
    domain: pkg.site.homepage,
    title: pkg.site.title,
    slogan: pkg.site.slogan,
    icps: pkg.site.icps,
  },
})
