<template>
  <div class="blocks danger">
    <h6 v-if="$slots.head">
      <ContentSlot :use="$slots.head" unwrap="p" />
    </h6>
    <ContentSlot :use="$slots.body ? $slots.body : $slots.default" />
  </div>
</template>

<style lang="scss" scoped>
// .danger {
//   @apply bg-rose-50 bg-opacity-50 border-rose-300 border-opacity-40;

//   :deep(h6), :deep(p):first-child strong:first-child, :deep(a) {
//     @apply text-rose-800 text-opacity-70 font-bold;
//   }

//   :deep(span), :deep(code), :deep(strong), :deep(em) {
//     @apply text-rose-800 text-opacity-60;
//   }

//   :deep(code) {
//     @apply bg-rose-200 bg-opacity-40;
//   }

//   :deep(a) {
//     @apply border-rose-500 border-opacity-50;

//     &:hover {
//       @apply text-rose-500 text-opacity-40;
//     }
//   }

//   :deep(p) {
//     @apply text-rose-900 text-opacity-50;
//   }
// }

// .dark .danger {
//   @apply bg-rose-500 bg-opacity-3 border-rose-400 border-opacity-30;

//   :deep(h6), :deep(p):first-child strong:first-child, :deep(a) {
//     @apply text-rose-400 text-opacity-80;
//   }

//   :deep(span), :deep(code), :deep(strong), :deep(em) {
//     @apply text-rose-200 text-opacity-80;
//   }

//   :deep(code) {
//     @apply bg-rose-500 bg-opacity-10;
//   }

//   :deep(a) {
//     @apply border-rose-300 border-opacity-50;

//     &:hover {
//       @apply text-rose-500 text-opacity-40;
//     }
//   }

//   :deep(p) {
//     @apply text-rose-200 text-opacity-60;
//   }
// }
</style>
