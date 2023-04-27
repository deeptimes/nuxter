/**
 * @name ColorMode
 * @see https://color-mode.nuxtjs.org/
*/
export function toggleDark() {
  const color = useColorMode()
  useHead({
    meta: [{
      id: 'theme-color',
      name: 'theme-color',
      content: () => color.value === 'dark' ? '#111111' : '#ffffff',
    }],
  })
  return color.preference = color.value === 'dark' ? 'light' : 'dark'
}
