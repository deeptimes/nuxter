import zh from '~/langs/zh.json'
import en from '~/langs/en.json'
import fr from '~/langs/fr.json'

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    snakeCase: (str: string) => str.split(' ').join('-'),
  },
}))
