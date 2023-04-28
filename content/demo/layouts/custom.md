# 自定义布局演示

## 说明
这个示例中：我把`Header`和`Footer`以及`main`都额外加了些圆角样式

同样也可以在这个布局文件的其他位置中加入你需要的内容。

<div class="grid grid-cols-2 gap-8">
<div class="">

### 自定义布局组件
```vue [layouts/demo-custom.vue]
<template>
  <div id="layout" class="custom-layout bg-sky-300" dark="bg-sky-900">
    <Header class="overflow-hidden rounded-b-2rem" />
    <main class="bg-sky-200" dark="bg-sky-800">
      <slot />
    </main>
    <Footer class="overflow-hidden rounded-t-2rem" />
  </div>
</template>

<style lang="scss" scoped>
.custom-layout{
  @apply min-h-screen flex flex-col;
  main{
    @apply m-8 flex-1 rounded-2rem;
  }}
</style>
```
</div>

<div class="">

### 页面组件代码
```vue
<script lang="ts" setup>
// PageMeta
definePageMeta({
  title: '使用了自定义布局的页面',
  layout: 'demo-custom', //这里是自定义布局组件的文件名
})
</script>

<template>
  <div id="page" class="page">
    ...
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
```
</div>
</div>

