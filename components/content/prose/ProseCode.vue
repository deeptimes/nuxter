<script lang="ts" setup>
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
})

// Copying
const { copy, copied } = useClipboard()

function copyContent(event: MouseEvent) {
  const group = (event.target as any)?.closest('.codes')

  if (group) {
    const content = group.querySelector('.content code')?.innerText
    if (content)
      copy(content)
  }
}
</script>

<template>
  <div class="codes">
    <div v-if="filename" class="file">
      {{ filename }}
    </div>
    <div v-else class="lang">
      {{ language }}
    </div>

    <div :class="{ active: copied }" class="copy" @click="copyContent($event)">
      <button v-if="copied">
        <small class="mr-2">已复制</small><i class="i-fas-clipboard-check" />
      </button>
      <button v-else>
        <i class="i-fal-clipboard" />
      </button>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.codes {
  @apply rounded-2xl bg-white mb-4 text-15px relative overflow-hidden;

  .lang {
    @apply capitalize;
  }

  .file,.lang {
    @apply font-bold text-14px p-2 absolute right-4 top-3;
  }

  .copy {
    @apply bg-light-200 opacity-0 absolute right-4 top-3 rounded-lg;

    button {
      @apply px-4 pt-1 pb-2;
    }

    &:hover {
      @apply bg-light-900;
    }

    &.active {
      @apply bg-light-700;
    }
  }

  &:hover {

    .lang {
      @apply opacity-0;
    }

    .copy {
      @apply opacity-100;
    }
  }

  .content {
    @apply py-4 pl-8 pr-20;

    pre, p {
      @apply my-0 py-0 px-4;
    }
  }
}

.code-group .codes {
    @apply mb-0;
  }

.dark .codes {
  @apply bg-dark-700;

  .copy {
    @apply bg-dark-900;

    &:hover {
      @apply bg-dark-50;
    }

    &.active {
      @apply bg-dark-700;
    }
  }
}
</style>
