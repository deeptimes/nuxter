/**
 * @name TailwindCss
 * @type {import('tailwindcss').Config}
 * @description 这个config在本项目中仅仅是为了配合vscode的自动提示插件使用。
 *
 */

export const content = [
  './components/**/*.vue',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './app.vue',
]

export const theme = {
  extend: {},
}

export const plugins = []
