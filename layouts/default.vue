<script lang="ts" setup>
const isSideMenuDrawer = useState('isSideMenuDrawer', () => false)
</script>

<template>
  <div id="layout-default" class="min-h-screen flex flex-col">
    <LayoutHeader />
    <main class="flex-1 bg-zinc-100 use-slide" dark="bg-zinc-800" :class="{ 'translate-x-64': isSideMenuDrawer }">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
