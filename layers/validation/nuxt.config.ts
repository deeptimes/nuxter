/**
 * @name Nuxt.Config.Vee
 * @link https://ezdoc.cn/docs/nuxtjs/nuxt-config
 * @link https://nuxt.com/docs/api/configuration/nuxt-config
 */

export default defineNuxtConfig({
  modules: [
    '@vee-validate/nuxt',
  ],

  veeValidate: {
    autoImports: true,
    // Use different names for components
    // componentNames: {
    //   Form: 'VeeForm',
    //   Field: 'VeeField',
    //   FieldArray: 'VeeFieldArray',
    //   ErrorMessage: 'VeeErrorMessage',
    // },
  },
})
