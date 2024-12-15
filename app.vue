<script lang="ts" setup>
/* Refresh Page */
const isRouterActive = ref(true)
provide('reload', () => {
  isRouterActive.value = false
  nextTick(() => {
    isRouterActive.value = true
  })
})
</script>

<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage v-if="isRouterActive" />
    </NuxtLayout>
    <PvLoadClass />
    <FloatBar />
  </div>
</template>
