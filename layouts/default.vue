<script lang="ts" setup>

</script>

<template>
  <div id="layout" class="default min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 bg-zinc-100" dark="bg-zinc-800">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
