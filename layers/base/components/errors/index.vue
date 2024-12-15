<script lang="ts" setup>
const props = withDefaults(defineProps<{
  error?: any
  code?: number
  msg?: string
}>(), {
  error: null,
  code: 0,
  msg: '',
})

const handleError = () => clearError({ redirect: '/' })

const errorCode = computed(() => {
  return props.code ? props.code : props.error?.statusCode
})

const errorMessage = computed(() => {
  return props.error ? props.error?.message : props.msg
})
</script>

<template>
  <div class="mt-32 flex flex-col items-center justify-center text-center">
    <IconsAvatar class="mx-auto w-64" :code="errorCode" />
    <h3 class="mt-4 text-18px">
      {{ errorMessage }}
    </h3>
    <button class="mt-8" @click="handleError">
      返回首页
    </button>
  </div>
</template>
