import { between, confirmed, email, length, max_value, min_value, regex, required } from '@vee-validate/rules'

/**
 * @name PluginName
 * @desc Description
 * @param {nuxtApp} 传递给插件的唯一参数.
 */
import { configure, defineRule } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
  /* 全局规则消息 */
  configure({
    generateMessage: (ctx) => {
      const messages: { [key: string]: string } = {
        required: `${ctx.field}字段为必填项！`,
        email: '邮箱格式不正确！',
        // 添加更多规则的消息...
      }
      if (ctx.rule?.name) {
        return messages[ctx.rule.name] || '该字段验证错误！'
      }
      return '验证规则未定义！'
    },
  })

  /* 必填 */
  defineRule('required', required)

  /* Other */
  defineRule('min', min_value)
  defineRule('max', max_value)

  /* 邮箱 */
  defineRule('email', email)

  /* 验证码 */
  defineRule('captcha', (value: string) => length(value, { length: 6 }) || '验证码必须为6位数字！')

  /* 密码&确认 */
  defineRule('password', (value: string) => regex(value, { regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ }) || '密码长度必须大于8位，且包含数字及大小写字母')
  defineRule('confirmed', (value: string, target: string) => confirmed(value, { target }) || `确认密码必须与${target}相匹配`)

  /* QQ */
  defineRule('numeric', (value: string) => regex(value, { regex: /^[1-9]\d{4,10}$/ }) || `QQ号只能为5-11位数字`)

  /* 国内手机 */
  defineRule('phone', (value: string) => regex(value, { regex: /^1[3-9]\d{9}$/ }) || `手机号必须为11位数字的国内号码段！`)

  /* 姓名范围 */
  defineRule('nameRange', (value: string) => between(value.length, { min: 3, max: 24 }) || '名称长度必须在3到12字符之间')

  /* 年龄范围 */
  defineRule('ageRange', (value: string) => {
    const num = Number.parseFloat(value)
    return between(num, { min: 18, max: 28 }) || '年龄必须在18-28之间'
  })

  // defineRule('checkEmail', async (value: string) => {
  //   // 如果输入为空或者格式不正确，VeeValidate 已经有内置的 required 和 email 规则，这里不需要重复处理
  //   if (!value) {
  //     return '请输入邮箱'
  //   }

  //   // 调用 API 验证邮箱是否可用
  //   const response = await soFetch<API.Response.Base>('/apis/send-code/check-email', {
  //     method: 'POST',
  //     body: { email: value },
  //     ignoreResponseError: true,
  //   })

  //   // 根据 API 的返回结果进行判断
  //   if (response.code === 0) {
  //     return true // 验证通过
  //   }
  //   else {
  //     return '该邮箱已被使用' // 返回错误消息
  //   }
  // })
})
