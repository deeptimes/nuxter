<script setup lang="ts">
const props = defineProps<{
  name: string
  title?: string
}>()

const slots = useSlots()
const registerItem = inject('registerFloatbarItem') as (name: string, content: any) => void

onMounted(() => {
  // 创建一个渲染函数来包装插槽内容
  const content = () => h('div', { class: 'float-item' }, [
    h('div', { class: 'header font-bold text-16px mb-2' }, slots.header?.() || props.title),
    h('div', { class: 'content' }, slots.content?.()),
  ])
  registerItem(props.name, content)
})
</script>

<template>
  <div class="float-item" />
</template>
