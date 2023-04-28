<script lang="ts" setup>
// Dropdown
const dropdown = ref(false)
const target = ref(null)
onClickOutside(target, () => dropdown.value = false)

// 多语言
const { locale } = useI18n()

const countries = ref([
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
])

function abc(s: string) {
  locale.value = s
  console.log(s)
}
</script>

<template>
  <span class="relative">
    <button type="button" title="prference" @click.stop="dropdown = !dropdown">
      <i class="i-ri-sun-fill" />
    </button>
    <ul v-if="dropdown" ref="target" class="absolute left-0 top-7 bg-zinc-100" dark="bg-zinc-800">
      <li v-for="(item, i) in countries" :key="i" @click="abc(item.code)">{{ item.name }}</li>
    </ul>
  </span>
</template>

<style lang="scss" scoped>
// ...

ul {
  @apply px-4;

  li {
    @apply cursor-pointer;
  }
}
</style>
