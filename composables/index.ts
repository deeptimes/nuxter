/**
 * @name Composables
 * @desc 将您的 Vue 可组合项自动导入到您的应用程序中
 * @see https://ezdoc.cn/docs/nuxtjs/dirs/composables
 */

export function useExample() {
  return {
    demo: '我是被自动导入进来的',
  }
}

export function useCount() {
  const count = useState('count', () => Math.round(Math.random() * 20))

  function inc() {
    count.value += 1
  }
  function dec() {
    count.value -= 1
  }

  return {
    count,
    inc,
    dec,
  }
}
