<template>
  <div id="layout" class="custom-layout bg-sky-300" dark="bg-sky-900">
    <Header class="overflow-hidden rounded-b-2rem" />
    <main class="bg-sky-200" dark="bg-sky-800">
      <slot />
    </main>
    <Footer class="overflow-hidden rounded-t-2rem" />
  </div>
</template>

<style lang="scss" scoped>
.custom-layout{
  @apply min-h-screen flex flex-col;

  main{
    @apply m-8 flex-1 rounded-2rem;
  }
}
</style>
