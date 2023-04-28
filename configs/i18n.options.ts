import zh from '~/locales/zh.json'
import en from '~/locales/en.json'
import fr from '~/locales/fr.json'

export default defineI18nConfig(nuxt => ({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh,
    en,
    fr,
  },
  modifiers: {
    // @ts-expect-error
    snakeCase: (str: string) => str.split(' ').join('-'),
  },
}))
