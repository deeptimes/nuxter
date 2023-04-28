<script lang="ts" setup>
const config = useRuntimeConfig()
const { data: abc } = await useFetch('/items/blog', {
  baseURL: config.public.apiBase,
  headers: { Authorization: `Bearer ${config.apiSecret}` },
})
console.log(abc.value, 'abc')

// PageMeta
definePageMeta({
  title: '1',
})
</script>

<template>
  <div id="page" class="page">
    <section class="md:(py-8)">
      <div class="mx-auto container">
        <h1>The Page</h1>
        <UixButton />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
