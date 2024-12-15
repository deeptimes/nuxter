<script setup lang="ts">
const route = useRoute()

const { isMobileView } = useMobile()
</script>

<template>
  <div class="page">
    <section class="container">
      <div class="bg-blue/30">
        d
      </div>
    </section>
    <section class="container">
      <p>{{ isMobileView }}</p>

      <h1>Nuxt Routing set up successfully!</h1>
      <p>Current route: {{ route.path }}</p>
      <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>

      <PvInputText />

      <PvButton label="anniu" />

      <div v-for="(item, i) in 32" :key="i" class="py-3 bg-red/30 my-4">
        {{ item }}
      </div>
    </section>
  </div>
</template>
