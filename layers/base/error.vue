<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div class="h-screen flex flex-col" light="bg-light-100">
    <main class="flex-1">
      <Errors :error="error" />
    </main>
  </div>
</template>
