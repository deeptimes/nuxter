<script lang="ts" setup>
const { locale } = useI18n()

// PageMeta
definePageMeta({
  title: '',
  layout: 'demo-custom',
})
</script>

<template>
  <div id="page" class="page">
    <section class="md:(py-8)">
      <div class="mx-auto container">
        <h1>The Page</h1>
        <form>
          <select v-model="locale">
            <option value="en">
              en
            </option>
            <option value="zh">
              zh
            </option>
          </select>
          <p>{{ $t('welcome') }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// ...
</style>
