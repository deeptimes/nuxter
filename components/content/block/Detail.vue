<script setup lang="ts">
const { acBeforeEnter, acEnter, acAfter, acBeforeLeave, acLeave } = acUse()
const status = ref(false)
</script>

<template>
  <div class="blocks info detail">
    <header v-if="$slots.head" @click="status = !status">
      <h6><i class="i-fas-caret-right" /><ContentSlot :use="$slots.head" unwrap="p" /></h6>
      <small>详情 <i class="i-fal-angle-down" /></small>
    </header>
    <Transition
      name="ac" @before-enter="acBeforeEnter" @enter="acEnter" @after-enter="acAfter"
      @before-leave="acBeforeLeave" @leave="acLeave" @after-leave="acAfter"
    >
      <main v-if="status">
        <ContentSlot :use="$slots.body ? $slots.body : $slots.default" />
      </main>
    </Transition>
  </div>
</template>

<style lang="scss">
.detail {

  header {
    @apply flex cursor-pointer items-center;

    small{
      @apply text-zinc-700 text-14px ml-auto font-normal;
    }
  }
}

.dark .detail {

  header {

    small{
      @apply text-zinc-300 ;
    }
  }
}

// .detail :not(.codes) :deep(span), .detail :not(.codes) :deep(code), .detail :not(.codes) :deep(strong), .detail :not(.codes) :deep(em) {
//   @apply text-blue-800 text-opacity-60;
// }

// .detail {
//   @apply bg-blue-50 bg-opacity-50 border-blue-300 border-opacity-50;

//   :deep(h6) {
//     @apply cursor-pointer flex justify-between items-center;
//   }

//   :deep(h6), :deep(p):first-child strong:first-child, :deep(a) {
//     @apply text-blue-800 text-opacity-70 font-bold;
//   }

//   // :deep(span), :deep(code), :deep(strong), :deep(em) {
//   //   @apply text-blue-800 text-opacity-60;
//   // }

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

// .dark .detail {
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
