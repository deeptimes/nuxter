<script lang="ts" setup>
const errorMessage = ref()
onNuxtReady(() => {
  errorMessage.value = throwError(false, 404)
})
</script>

<template>
  <div id="page" class="pt-16">
    <Errors :msg="errorMessage" :code="404" />
  </div>
</template>
