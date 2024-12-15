# vee-validate
[vee-validate](https://vee-validate.logaretm.com/)

```json
{
  "@vee-validate/nuxt": "^4.14.7",
  "@vee-validate/rules": "^4.14.7",
  "vee-validate": "^4.14.7"
}
```

```json
{
  "modules": [
    "@vee-validate/nuxt"
  ],

  "veeValidate": {
    "autoImports": true,
    // 使用不同的组件名
    "componentNames": {
      "Form": "VeeForm",
      "Field": "VeeField",
      "FieldArray": "VeeFieldArray",
      "ErrorMessage": "VeeErrorMessage"
    }
  }
}
```
