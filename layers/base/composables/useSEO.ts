/**
 * @name useSEO
 * @description 生成SEO标题,描述,关键词，优先来自页面，其次来中间件全局配置
 * @returns
 * @arguments
 */
import type { UseSeoMetaInput } from '@unhead/vue'

interface SeoOptions {
  title: string
  description?: string
  keywords?: string
  ogImage?: string
}

export function useSEO(options: SeoOptions) {
  /* 仅设置不为空的元数据 */
  const seoMeta: UseSeoMetaInput = {
    title: () => options.title,
  }

  /* 如果有才使用，否则使用中间件全局配置 */
  // 描述
  if (options.description) {
    seoMeta.description = () => options.description
    seoMeta.ogDescription = () => options.description
  }

  // 图片
  if (options.ogImage)
    seoMeta.ogImage = () => options.ogImage

  useSeoMeta(seoMeta)

  // 动态构建 meta 数组
  const metaArray = []

  if (options.keywords) {
    metaArray.push({
      name: 'keywords',
      content: options.keywords,
    })
  }
  // 关键词处理，保持不变
  useHead({
    meta: metaArray,
  })
}
