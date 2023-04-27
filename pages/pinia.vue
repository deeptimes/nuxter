<script lang="ts" setup>
// PageMeta
definePageMeta({
  title: '',
})
</script>

<template>
  <div id="page" class="page">
    <section class="md:(py-8)">
      <div class="mx-auto container">
        <h1>use State</h1>
        <CounterState />
        <h1>use Pinia</h1>
        <CounterPinia />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
