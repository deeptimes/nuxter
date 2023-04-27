<script lang="ts" setup>
const site = useAppConfig().site

/**
* @name Head.&.Meta
* @see seoMeta.global.ts
*/
useSeoMeta({
  title: `${site.name}·首页 - ${site.slogan}`,
  description: site.description,
  ogType: 'website',
  ogDescription: site.description,
})
useHead({ meta: [{ name: 'keywords', content: site.keywords }] })
definePageMeta({ title: '' })
</script>

<template>
  <div id="page" class="home">
    <section class="py-8">
      <div class="mx-auto container">
        <div class="top-2/5 abs-xy">
          <div class="w-72">
            <LogoAvatar />
          </div>
          <div class="mt-8 text-center space-x-8">
            <NuxtLink to="/demo" class="btn rounded-lg bg-violet-500 px-6 py-2">
              DEMO
            </NuxtLink>
            <NuxtLink to="https://github.com/deeptimes/nuxter" class="btn rounded-lg bg-violet-600 px-6 py-2">
              Github
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
