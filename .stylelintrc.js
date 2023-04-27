module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  customSyntax: 'postcss-html',
  overrides: [
    {
      files: ['**/*.{scss,css,sass}'], // css 相关文件由 postcss-scss 处理
      customSyntax: 'postcss-scss'
    },
  ],
  rules: {
    "no-descending-specificity": null, // 尽量避免使用具有逐级降低的特定性（specificity）的选择器。
    "rule-empty-line-before": "always"
  }
}
