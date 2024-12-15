<script lang="ts" setup>
import type { MenubarPassThroughMethodOptions } from 'primevue'
import type { MenuItem } from 'primevue/menuitem'

interface SideMenus {
  data: MenuItem[]
  visabled: boolean
}

const props = defineProps<SideMenus>()

const emit = defineEmits<{
  (event: 'update:visabled', value: boolean): void
}>()

const route = useRoute()

const isVisible = ref(props.visabled)

const ptMenubar = ref({
  item: ({ context }: MenubarPassThroughMethodOptions) => {
    const isCurrentRoute = context.item?.route === route.path
    return {
      'class': [{ 'p-focus': isCurrentRoute }],
      'data-p-focused': 'true',
    }
  },
})

// 监听 props.visabled 的变化，更新内部状态
watch(() => props.visabled, (newVal) => {
  if (newVal !== isVisible.value) {
    isVisible.value = newVal
  }
})

// 监听内部状态 isVisible 的变化，通知父组件更新
watch(isVisible, (newVal) => {
  if (newVal !== props.visabled) {
    emit('update:visabled', newVal)
  }
})

const dtMenubar = ref({})
</script>

<template>
  <PvDrawer v-model:visible="isVisible" block-scroll :show-close-icon="false" :pt="{ root: { class: 'w-64' }, pcCloseButton: { class: 'lixin' } }">
    <nav>
      <PvMenu :model="data" :dt="dtMenubar" :pt="ptMenubar" @click="emit('update:visabled', false)">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span v-if="item.icon" :class="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span v-if="item.icon" :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </template>
      </PvMenu>
    </nav>
  </PvDrawer>
</template>
