<script lang="ts" setup>
const props = defineProps<{ url: string }>()
const router = useRouter()
const pathGits = useRoute().params.gits

function reDirect() {
  router.replace(`/docs/${pathGits}/${props.url}`)
}

onMounted(() => {
  reDirect()
})
</script>

<template>
  <div />
</template>
