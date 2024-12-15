import antfu from '@antfu/eslint-config'

export default antfu({
  // unocss: true,
}, {
  rules: {
    'no-console': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'jsonc/array-bracket-spacing': ['error', 'never'],
  },
})
