<script setup lang="ts">
import IconSvg from '@atoms/IconSvg.vue';
import { computed } from 'vue';
import { useRoute, RouteLocationNormalized, RouterLink } from 'vue-router';
import RouterBackLink from '@molecules/RouterBackLink.vue';

const route = useRoute()

const isMaterFormPage = computed((): boolean => {
  return (route as RouteLocationNormalized).meta.view === 'masterFormView';
})
</script>

<template>
  <header
    class="container d-flex justify-content-center align-items-center rounded-bottom-4 header position-relative mt-2 mb-4"
  >
    <RouterBackLink v-if="isMaterFormPage" to="/" class="h-24 w-24 header__back">
      <img src="/src/assets/svg/back.svg" alt="">
    </RouterBackLink>
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
