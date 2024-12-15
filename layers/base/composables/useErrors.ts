/**
 * @name throwError
 */
export function throwError(create: boolean = true, code: number) {
  const errorMessages = [
    '哎呀，页面走丢了！',
    '看起来我们迷路了，找不到你请求的页面。',
    '这个页面已经升天了！',
    '你来到了知识的荒原，这里什么也没有。',
    '四零四星系，这里没有你要找的页面。',
    '页面像袜子一样消失在洗衣机中。',
    '这页不存在，或许永远不会存在。',
    '页面出去溜达了，一会儿回来。',
    '这不是你要找的页面，继续探索吧！',
    '你触碰到了未知的领域，这里空无一物。',
  ]

  const randomIndex = Math.floor(Math.random() * errorMessages.length) // 随机选择一个索引
  const randomErrorMessage = errorMessages[randomIndex] // 获取随机错误消息

  if (create) {
    throw createError({
      statusCode: code,
      message: randomErrorMessage,
    })
  }
  else {
    return randomErrorMessage
  }
}
