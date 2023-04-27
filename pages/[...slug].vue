<script lang="ts" setup>
// Page Meta
definePageMeta({
  title: '页面没找到',
})
</script>

<template>
  <div id="page" class="not_found">
    <div class="mx-auto mt-16 text-center container">
      <h1 class="mb-4 align-middle font-thin">
        抱歉！页面没有找到！
      </h1>
      <button class="border-b border-gray-200 px-4 py-2" @click="$router.push('/')">
        返回首页
      </button>
    </div>
  </div>
</template>
