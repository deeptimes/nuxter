<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})

const isExternalLink = props.href.startsWith('http') || props.href.startsWith('https')

const lowercaseHref = computed(() => props.href.toLowerCase())
</script>

<template>
  <NuxtLink :href="lowercaseHref" :target="isExternalLink ? '_blank' : target">
    <slot />
  </NuxtLink>
</template>
