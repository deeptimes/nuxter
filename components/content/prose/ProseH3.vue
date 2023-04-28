<script setup lang="ts">
defineProps<{ id: string }>()
</script>

<template>
  <h3 :id="id">
    <slot />
    <a :href="`#${id}`" class="h_anchor i-fas-link" />
  </h3>
</template>

<style lang="scss" scoped>
h3 {
  @apply pt-6;

  a {
    @apply mb-1 ml-2 opacity-0 translate-x-4;
  }

  &:hover {

    a {
      @apply opacity-100 translate-x-0;
    }
  }
}
</style>
