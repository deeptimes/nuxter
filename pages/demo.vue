<script lang="ts" setup>
const data = reactive({
  title: '新鲜西红柿',
  seoTitle: '今日最新特价新鲜的西红柿价格',
  keywords: '特价,新鲜,水果,西红柿,价格',
  description: '本超市今日上架的素菜蔬果都是非常新鲜的',
  categories: '水果素材',
})

const slug = useRoute().params.slug

/**
* @name Head.&.Meta
* @see seoMeta.global.ts
*/
useSeoMeta({
  title: data.seoTitle,
  description: data.description,
  ogType: 'article',
  ogDescription: data.description,
})
useHead({ meta: [{ name: 'keywords', content: data.keywords }] })
definePageMeta({ title: '产品详情' })
</script>

<template>
  <div id="page" class="page">
    <section class="md:(py-8)">
      <div class="mx-auto container abs-xc">
        <h1>The Demo Page {{ slug }}</h1>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
