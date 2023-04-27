/**
 * @name Server index
 * @methods .get / .post / .put / .delete
 * @param {event}
 * @scans ~/server/api, ~/server/routes, ~server/middleware
 * @refer https://ezdoc.cn/docs/nuxtjs/dirs/server
*/

export default defineEventHandler(() => {
  return {
    title: 'server api',
  }
})
