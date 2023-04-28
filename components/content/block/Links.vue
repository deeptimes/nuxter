<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'links',
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
})
const linkType = computed(() => {
  switch (props.type) {
    case 'links':
      return '相关阅读'
    case 'more':
      return '更多内容'
    case 'example':
      return '案例演示'
    case 'play':
      return '在线试炼'
    default:
      return props.type
  }
})

const isExternalLink = props.url.startsWith('http') || props.url.startsWith('https')

const result = ref()

if (isExternalLink) {
  result.value = props.url
}
else {
  const parts = props.url.split('/').slice(3)
  result.value = parts.join(' > ')
}
</script>

<template>
  <div class="more">
    <NuxtLink :to="url" :target="isExternalLink ? '_blank' : '_self'">
      {{ linkType }}：<span v-if="title">{{ title }}</span> <span v-else>{{ result }}</span>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.more {
  @apply border bg-violet-500 bg-opacity-3 border-violet-400 border-opacity-30 w-max rounded-lg border-dashed text-zinc-100 my-4;

  a {
    @apply border-b-none px-4 py-1 block;

    &:hover{
      @apply text-white;
    }
  }
}
</style>
