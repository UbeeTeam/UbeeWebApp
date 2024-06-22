<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@organisms/TheHeader.vue'
import TheFooter from '@organisms/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<style scoped></style>
