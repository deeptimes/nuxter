/**
 * @name App.d.ts
 * @link https://ezdoc.cn/docs/nuxtjs/nuxt-config
 * @desc 提供app.config.ts下的类型定义
 * @config by https://github.com/deeptimes/nuxter
 */

declare namespace App {
  export interface site {
    name: string
    title: string
    keywords: string[]
    description: string
    domain: string
    slogan: string
    icps: string
  }
}
