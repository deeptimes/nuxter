<script lang="ts" setup>
defineProps({
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
  <video autoplay loop controls muted playsinline>
    <source :src="src" type="video/mp4">
  </video>
</template>

<style lang="scss" scoped>
video{
  @apply rounded-lg aspect-video overflow-hidden mb-4 w-full h-full;
}
</style>
