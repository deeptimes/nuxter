<script lang="ts" setup>
const { data } = await useAsyncData<any>('custom-layout', () => queryContent('/demo/layouts/custom').findOne())

// PageMeta
definePageMeta({
  title: '自定义布局演示',
  layout: 'demo-custom',
})
</script>

<template>
  <div id="page" class="page">
    <section class="md:(py-8)">
      <div class="mx-auto container">
        <div class="prose">
          <ContentRenderer :value="data">
            <ContentRendererMarkdown :value="data" />
          </ContentRenderer>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
