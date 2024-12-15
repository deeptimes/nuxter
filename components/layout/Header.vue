<script lang="ts" setup>
/* 准备工作 */
const { isMobile } = useDevice()
const { data: navs } = await useFetch('/api/menus', {
  default: () => [],
})

/* Use ColorMode */
const color = useColorMode()
useHead({
  meta: [{ id: 'theme-color', name: 'theme-color', content: () => color.value === 'dark' ? '#111111' : '#ffffff' }],
})

function toggleDark() {
  return color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const theme = computed(() => {
  switch (color.value) {
    case 'dark':
      return 'i-fad-moon'
    case 'light':
      return 'i-fad-sun'
    default:
      return 'i-fad-display-code'
  }
})

/* 手机菜单 */
const isDrawer = useState<boolean>('isSideMenuDrawer')
function toggleMenu() {
  isDrawer.value = !isDrawer.value
}
</script>

<template>
  <header class="sticky top-0 bg-white z-50" dark="bg-zinc-900">
    <div class="mx-auto h-14 flex items-center justify-between px-4 container">
      <NuxtLink class="md:hidden" to="/">
        <i class="i-fal-house" />
      </NuxtLink>

      <!-- Logo -->
      <div class="logo">
        <h1>LOGO</h1>
      </div>

      <!-- Navigation -->
      <MenuSidebar v-if="isMobile" v-model:visabled="isDrawer" :data="navs" />
      <MenuTopbar v-else class="mr-auto ml-16" :data="navs" />

      <!-- Actions -->
      <div class="actions h-full flex items-center">
        <!-- 切换主题 -->
        <a class="h-full hidden items-center w-8 justify-center md:flex" @click="toggleDark">
          <ColorScheme tag="i" class="i-fad-display-code">
            <i :class="theme" class="text-14px" />
          </ColorScheme>
        </a>
        <!-- 手机菜单按钮 -->
        <a class="h-full flex items-center px-3 justify-center md:hidden" @click="toggleMenu">
          <i class="i-fal-bars text-1rem" />
        </a>
      </div>
    </div>
    <!-- Outside -->
  </header>
</template>
