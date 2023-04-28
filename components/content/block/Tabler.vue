<script lang="ts" setup>
const props = defineProps(['width'])

function useTabler() {
  const tabler = document.querySelectorAll('.tabler thead tr th')
  tabler.forEach((th: any, index) => {
    // th.style.color = props.color[index]
    th.style.width = props.width[index]
  })
}

onMounted(() => {
  useTabler()
})
</script>

<template>
  <div class="tabler">
    <h6 v-if="$slots.head">
      <ContentSlot :use="$slots.head" unwrap="p" />
    </h6>
    <ContentSlot :use="$slots.body ? $slots.body : $slots.default" />
  </div>
</template>

<style lang="scss">
// .tabler table th{
//   background-color: red;
// }

.prose {

  .tabler {

    table {
      @apply rounded-lg;

      // thead tr {
      //   th {
      //     &:nth-child(1){
      //       background-color: red;
      //     }
      //     &:nth-child(2){
      //       background-color: orange;
      //       width: 20%;
      //     }
      //     &:nth-child(3){
      //       background-color: blue;
      //     }
      //     &:nth-child(4){
      //       background-color: green;
      //     }
      //   }
      // }

    }
  }
}
</style>
