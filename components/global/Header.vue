<script lang="ts" setup>
const menus = ref([
  { title: 'Home', slug: 'index' },
  { title: 'pinia', slug: 'pinia' },
  { title: '文档', slug: 'pinia' },
])
</script>

<template>
  <header class="w-full bg-white" un-dark="bg-zinc-900">
    <div class="mx-auto flex items-center justify-between container">
      <div class="logo pt-2">
        <i class="i-icon-logo w-24" />
      </div>
      <nav class="h-12 flex items-center">
        <div class="menus">
          <NuxtLink v-for="item in menus" :key="item" :to="{ name: item.slug }">
            {{ item.title }}
          </NuxtLink>
        </div>
        <div class="btns ml-4">
          <button type="button" title="prference" @click="toggleDark">
            <i class="i-ri-sun-fill" dark="i-ri-moon-fill" />
          </button>
          <NuxtLink to="https://github.com/deeptimes/nuxter" target="_blank">
            <i class="i-ri-github-fill" />
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.menus {

  a {
    @apply p-3;
  }
}

.btns {

  button,
  a {
    @apply py-3 px-2;
  }

  i {
    @apply mt-2 inline-block;
  }
}
</style>
