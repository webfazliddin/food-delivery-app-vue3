<template>
  <AppHeader :elevated="headerIsElevated" />
  <RouterView />
  <AppFooter />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWindowScroll } from "@vueuse/core";
const { y } = useWindowScroll();

const headerIsElevated = computed(() => {
  return y.value > 10;
});
</script>
