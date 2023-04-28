<script setup lang="ts">
defineProps<{ id: string }>()
// const id = props.id || $content(self.$localePath).heading.slug($page.headings[0])
</script>

<template>
  <h2 :id="id">
    <slot />
    <a :href="`#${id}`" class="h_anchor i-fas-link" />
  </h2>
</template>

<style lang="scss" scoped>
h2 {
  @apply border-light-900;

  a {
    @apply mb-1 ml-2 opacity-0 translate-x-4;
  }

  &:hover {

    a {
      @apply opacity-100 translate-x-0;
    }
  }

  &:not(:nth-of-type(1)) {
    @apply border-t border-dashed mt-12;
  }
}
</style>
