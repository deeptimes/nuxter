<script setup lang="ts">
import type { FloatbarItem, FloatbarItemInstance } from './types'

const props = defineProps<{
  data: FloatbarItem[]
}>()

const emit = defineEmits<{
  (e: 'click', item: FloatbarItem): void
}>()

const activeItem = ref<string | null>(null)
const itemsMap = ref<Map<string, FloatbarItemInstance>>(new Map())

// 提供注册方法给子组件
function registerItem(name: string, content: any) {
  itemsMap.value.set(name, { name, content })
}

provide('registerFloatbarItem', registerItem)

function hasContent(name: string): boolean {
  return itemsMap.value.has(name)
}

function getContent(name: string): Component | undefined {
  return itemsMap.value.get(name)?.content
}

function getProps(name: string) {
  // 这里可以添加需要传递给内容组件的props
  return {}
}

function handleMouseEnter(name: string) {
  activeItem.value = name
  if (hasContent(name)) {
    activeItem.value = name
  }
}

function handleAction(item: FloatbarItem) {
  if (item.name === 'backtop') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 处理按钮点击事件
  emit('click', item)
}
</script>

<template>
  <div class="fixed right-0 top-2/3 -translate-y-2/3">
    <ul class="main flex flex-col">
      <li
        v-for="(item, i) in data"
        :key="item.name"
        class="relative"
        @mouseenter="handleMouseEnter(item.name)"
        @mouseleave="activeItem = null"
      >
        <!-- 按钮部分 -->
        <button
          class="flex flex-col items-center gap-y-1 border border-b-0 bg-white px-4 py-3 transition-colors duration-300 hover:(bg-zinc-200 text-brand-accent)" dark="bg-zinc-900 border-zinc-700 hover:(bg-zinc-950)" :class="[i === 0 ? 'rounded-tl-lg' : '', i === data.length - 1 ? 'rounded-bl-lg !border-b' : '']"
          @click="handleAction(item)"
        >
          <i :class="[item.icon, item.color]" class="w-8 text-center text-brand-accent" />
          <span class="text-14px font-medium">{{ item.title }}</span>
        </button>

        <!-- 弹出内容部分 -->
        <Transition name="fade">
          <div v-if="activeItem === item.name && hasContent(item.name)" class="absolute right-16 top-0 z-20 w-max pr-2 after:(absolute right-2px top-5 h-14px w-14px rotate-45 border border-zinc-300 border-b-transparent border-l-transparent rounded-sm bg-white content-[''])" dark="after:(bg-zinc-900 border-zinc-700 border-b-transparent border-l-transparent)">
            <div class="min-h-16 border border-zinc-300 rounded-lg bg-white px-4 py-2" dark="bg-zinc-900 border-zinc-700">
              <component :is="getContent(item.name)" v-bind="getProps(item.name)" />
            </div>
          </div>
        </Transition>
      </li>
    </ul>
    <!-- 渲染插槽内容但不显示，确保子组件能够挂载 -->
    <div class="hidden">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-leave-active{
  /* 防止鼠标再次回落时显示 */
  pointer-events: none;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
