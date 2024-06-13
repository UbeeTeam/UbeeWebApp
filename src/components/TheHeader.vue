<script setup lang="ts">
import IconUI from './UI/IconUI.vue';
import { useRoute, RouteLocationNormalized } from 'vue-router';

const route = useRoute();

const isHomePage = (): boolean => {
  return (route as RouteLocationNormalized).path === '/';
}
</script>

<template>
  <header
    class="container d-flex justify-content-center align-items-center rounded-bottom-4 header"
  >
    <RouterLink v-if="!isHomePage" class="h-24 w-24">
      <IconUI :name="'icon-back'"/>
    </RouterLink>
    <figure class="d-block logo">
      <img src="/src/assets/images/logo.png" alt="logo" class="d-block logo__image" />
    </figure>
  </header>
</template>

<style lang="scss" scoped>
</style>
