/**
 * @name Plugins
 * @refer https://ezdoc.cn/docs/nuxtjs/dirs/plugins
 * @param { nuxtApp } 唯一参数
 * @see https://ezdoc.cn/docs/nuxtjs/composables/use-nuxt-app
 */

export default defineNuxtPlugin((nuxtApp) => {
  const vers = nuxtApp.versions.nuxt
  console.log([
    '    _  ____  ___  _______________     ',
    '   / |/ / / / / |/_/_  __/ __/ _ ⭐️   ',
    '  /    / /_/ />  <  / / / _// , _/    ',
    ' /_/|_/\\____/_/|_| /_/ /___/_/|_|    ',
    `----------------------------------- : Nuxt.js v${vers} - Dev by https://deep-time.com`,
  ].join('\n'))
})
