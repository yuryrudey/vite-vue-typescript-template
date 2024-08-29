<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const route = useRoute();
const layoutComponent = computed(() => {
  const layoutName = route.meta.layout;
  if (layoutName === undefined) {
    return DefaultLayout;
  }
  return defineAsyncComponent(() => import(`@/layouts/${layoutName}.vue`));
});
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
