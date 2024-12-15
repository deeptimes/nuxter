<script lang="ts" setup>
const router = useRouter()
const floatData = ref([
  { title: '客服', name: 'online', icon: 'i-fas-user-headset', color: '' },
  { title: '留言', name: 'feedback', icon: 'i-fas-message-dots', color: '' },
  { title: '置顶', name: 'backtop', icon: 'i-fas-arrow-up-to-line', color: '' },
])

function handleClick(item: any) {
  if (item.name === 'feedback') {
    router.push(`/`)
  }
}
</script>

<template>
  <Floater :data="floatData" class="hidden sd:block" @click="handleClick">
    <FloaterItem name="online" title="在线客服">
      <template #content>
        <NuxtLink to="#" class="block rounded-lg bg-zinc-100 px-3 py-1 text-14px font-medium" dark="bg-zinc-800">
          QQ:447667
        </NuxtLink>
        <div class="text-center mt-2">
          <img src="/images/qrcode.jpg" alt="" class="w-36">
          <small>扫码添加微信客服</small>
        </div>
      </template>
    </FloaterItem>
  </Floater>
</template>
