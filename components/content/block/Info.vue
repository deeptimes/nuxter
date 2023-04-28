<template>
  <div class="blocks info">
    <h6 v-if="$slots.head">
      <ContentSlot :use="$slots.head" unwrap="p" />
    </h6>
    <ContentSlot :use="$slots.body ? $slots.body : $slots.default" />
  </div>
</template>

<style lang="scss" scoped>
// .info {
//   @apply bg-blue-50 bg-opacity-50 border-blue-300 border-opacity-50;

//   :deep(h6), :deep(p):first-child strong:first-child, :deep(a) {
//     @apply text-blue-800 text-opacity-70 font-bold;
//   }

//   :deep(span), :deep(code), :deep(strong), :deep(em) {
//     @apply text-blue-800 text-opacity-60;
//   }

//   :deep(code) {
//     @apply bg-blue-200 bg-opacity-40;
//   }

//   :deep(a) {
//     @apply border-blue-500 border-opacity-50;

//     &:hover {
//       @apply text-blue-500 text-opacity-40;
//     }
//   }

//   :deep(p) {
//     @apply text-blue-900 text-opacity-50;
//   }
// }

// .dark .info {
//   @apply bg-blue-500 bg-opacity-3 border-blue-400 border-opacity-30;

//   :deep(h6), :deep(p):first-child strong:first-child, :deep(a) {
//     @apply text-blue-400 text-opacity-80;
//   }

//   :deep(span), :deep(code), :deep(strong), :deep(em) {
//     @apply text-blue-200 text-opacity-80;
//   }

//   :deep(code) {
//     @apply bg-blue-500 bg-opacity-10;
//   }

//   :deep(a) {
//     @apply border-blue-300 border-opacity-50;

//     &:hover {
//       @apply text-blue-500 text-opacity-40;
//     }
//   }

//   :deep(p) {
//     @apply text-blue-200 text-opacity-60;
//   }
// }
</style>
