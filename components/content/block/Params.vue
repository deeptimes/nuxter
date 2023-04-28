<script lang="ts" setup>
defineProps<{ name: string; type: string; required: string; defaults: string }>()
</script>

<template>
  <dl class="params">
    <dt>
      <h5>{{ name }}</h5>
      <span><mark>{{ type }}</mark></span>
      <span><mark>{{ required === 'yes' ? '必填' : required === 'no' ? '可选' : required }}</mark></span>
      <span><mark>默认值</mark>{{ defaults }}</span>
    </dt>

    <dd><ContentSlot :use="$slots.default" unwrap="p" /></dd>
  </dl>
</template>

<style lang="scss" scoped>
.params{
  @apply border-b py-4;

  dt{
    @apply flex items-center space-x-4 mb-2;

    mark{
      @apply bg-light-700 px-2 py-0.5 rounded-md mx-1 text-14px;
    }

    h5{
      @apply m-0 text-18px;
    }

    em{
      @apply not-italic font-bold;
    }
  }

  dd{
    @apply px-6;
  }
}
</style>
