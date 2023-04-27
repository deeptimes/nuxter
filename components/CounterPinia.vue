<script setup lang='ts'>
const pinia = useCounterStore()
</script>

<template>
  <div inline-flex m="y-3">
    <button btn rounded-full p-2 @click="pinia.decrement()">
      <div i-ri-indeterminate-circle-fill />
    </button>
    <div m-auto inline-block>
      {{ pinia.doubleCount }}
    </div>
    <button btn rounded-full p-2 @click="pinia.increment()">
      <div i-ri-add-circle-fill />
    </button>
  </div>
</template>
