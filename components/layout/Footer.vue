<script lang="ts" setup>
interface PropsFooter {
  hasbg?: boolean
}

const props = withDefaults(defineProps<PropsFooter>(), {
  hasbg: true,
})

const year = useDateFormat(useNow(), 'YYYY')
</script>

<template>
  <footer :class="hasbg ? 'bg-zinc-200 dark:bg-zinc-900' : 'text-white px-8 mb-4'">
    <div class="mx-auto flex flex-col items-center py-4 container md:(flex-row justify-between)">
      <span>© {{ year }} Nuxter.cn All rights reserved.</span>
      <NuxtLink to="https://beian.miit.gov.cn/">
        粤ICP备15031517号
      </NuxtLink>
    </div>
  </footer>
</template>
