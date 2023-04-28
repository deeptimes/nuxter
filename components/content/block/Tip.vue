<template>
  <div class="blocks tip">
    <header v-if="$slots.head">
      <i class="i-fas-circle-exclamation" /> <ContentSlot :use="$slots.head" unwrap="p" />
    </header>
    <ContentSlot :use="$slots.body ? $slots.body : $slots.default" />
  </div>
</template>

<style lang="scss" scoped>
// .blocks {
//   @apply bg-indigo-50 bg-opacity-50 border-indigo-100;

//   :deep(h6), :deep(p):first-child strong:first-child, :deep(a) {
//     @apply text-indigo-800 text-opacity-70 font-bold;
//   }

//   :deep(span), :deep(code), :deep(strong), :deep(em) {
//     @apply text-indigo-800 text-opacity-60;
//   }

//   :deep(code) {
//     @apply bg-indigo-200 bg-opacity-40;
//   }

//   :deep(a) {
//     @apply border-indigo-500 border-opacity-50;

//     &:hover {
//       @apply text-indigo-500 text-opacity-40;
//     }
//   }

//   :deep(p) {
//     @apply text-indigo-900 text-opacity-50;
//   }
// }

// .dark .blocks {
//   @apply bg-violet-500 bg-opacity-3 border-violet-400 border-opacity-30;

//   :deep(h6), :deep(p):first-child strong:first-child, :deep(a) {
//     @apply text-violet-400 text-opacity-80;
//   }

//   :deep(span), :deep(code), :deep(strong), :deep(em) {
//     @apply text-violet-200 text-opacity-80;
//   }

//   :deep(code) {
//     @apply bg-violet-500 bg-opacity-10;
//   }

//   :deep(a) {
//     @apply border-violet-300 border-opacity-50;

//     &:hover {
//       @apply text-violet-500 text-opacity-40;
//     }
//   }

//   :deep(p) {
//     @apply text-violet-200 text-opacity-60;
//   }
// }
</style>
