/**
 * @name TailwindCss
 * @type {import('tailwindcss').Config}
 * @description 这个config在本项目中仅仅是为了配合vscode的自动提示插件使用。
 *
*/
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
