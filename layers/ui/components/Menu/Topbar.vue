<script lang="ts" setup>
import type { MenubarPassThroughMethodOptions } from 'primevue'
import type { MenuItem } from 'primevue/menuitem'

interface TopMenus {
  data: MenuItem[]
}

const { data } = defineProps<TopMenus>()

const route = useRoute()

const ptMenubar = ref({
  item: ({ context }: MenubarPassThroughMethodOptions) => {
    const isCurrentRoute = context.item?.route === route.path
    return {
      'class': [{ 'p-focus': isCurrentRoute }],
      'data-p-focused': 'true',
    }
  },
})

const dtMenubar = ref({})
</script>

<template>
  <nav>
    <PvMenubar :model="data" :dt="dtMenubar" :pt="ptMenubar">
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span v-if="item.icon" :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="text-12px ml-auto" :class="[root ? 'i-fal-angle-down' : 'i-fal-angle-right']" />
        </a>
      </template>
    </PvMenubar>
  </nav>
</template>
