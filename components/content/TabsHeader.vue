<script setup lang="ts">
const props = defineProps({
  tabs: {
    type: Array as PropType<{ label: string }[]>,
    required: true,
  },
  activeTabIndex: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['update:activeTabIndex'])

const tabsRef = ref()

const highlightUnderline = ref()

const updateHighlightUnderlinePosition = (activeTab: any) => {
  if (!activeTab)
    return

  highlightUnderline.value.style.left = `${activeTab.offsetLeft}px`
  highlightUnderline.value.style.width = `${activeTab.clientWidth}px`
}

const updateTabs = ($event: any, i: any) => {
  emit('update:activeTabIndex', i)
  nextTick(() => updateHighlightUnderlinePosition($event.target))
}

watch(
  tabsRef,
  (newVal) => {
    if (!newVal)
      return

    setTimeout(() => {
      updateHighlightUnderlinePosition(tabsRef.value.children[props.activeTabIndex])
    }, 50)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="tabs-header flex items-center">
    <div class="px-6">
      <i class="i-fal-code text-20px" />
    </div>
    <div v-if="tabs" ref="tabsRef" class="tabs">
      <button
        v-for="({ label }, i) in tabs"
        :key="`${i}${label}`"
        :class="[activeTabIndex === i ? 'active' : 'not-active']"
        @click="updateTabs($event, i)"
      >
        {{ label }}
      </button>
      <span ref="highlightUnderline" class="highlight-underline">
        <span class="tab" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="ts">

</style>
