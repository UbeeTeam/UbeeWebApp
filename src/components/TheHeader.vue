<script setup lang="ts">
import IconUI from './UI/IconUI.vue'
import { computed } from 'vue'
import { useRoute, RouteLocationNormalized, RouterLink } from 'vue-router'

const route = useRoute()

const isHomePage = computed((): boolean => {
  return (route as RouteLocationNormalized).path === '/'
})
</script>

<template>
  <header
    class="container d-flex justify-content-center align-items-center rounded-bottom-4 header position-relative"
  >
    <RouterLink v-if="!isHomePage" to="/" class="h-24 w-24 header__back">
      <IconUI :name="'icon-back'" />
    </RouterLink>
    <figure class="d-block logo">
      <img src="/src/assets/images/logo.png" alt="logo" class="d-block logo__image" />
    </figure>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__back {
    position: absolute;
    left: 0;
  }
}
</style>
