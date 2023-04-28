<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
})
</script>

<template>
  <figure class="frame">
    <iframe :src="src" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" />
  </figure>
</template>

<style lang="scss" scoped>
.frame{
  @apply rounded-lg aspect-video overflow-hidden mb-4;

  iframe{
  @apply w-full h-full object-fill;
}
}
</style>
