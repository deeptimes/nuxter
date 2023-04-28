/**
 * @name Server.Demo
*/

export default defineEventHandler(() => {
  return {
    demo: {
      layouts: {
        custom: {
          tips: 'I\'m a Text in the Custom layout',
        },
      },
    },
  }
})
