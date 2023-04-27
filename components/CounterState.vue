<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div inline-flex m="y-3">
    <button btn rounded-full p-2 @click="dec()">
      <div i-ri-indeterminate-circle-fill />
    </button>
    <div m-auto inline-block>
      {{ count }}
    </div>
    <button btn rounded-full p-2 @click="inc()">
      <div i-ri-add-circle-fill />
    </button>
  </div>
</template>
