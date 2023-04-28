<script lang="ts" setup>

</script>

<template>
  <div id="layout" class="default min-h-screen flex flex-col">
    <Header />
    <div class="bg-sky-300 py-4 text-center" dark="bg-sky-900">
      <!-- {{ $t('demo.layouts.custom.tips') }} -->
      text
    </div>
    <main class="flex-1 bg-sky-100" dark="bg-sky-800">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
