<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@organisms/TheHeader.vue'
import TheFooter from '@organisms/TheFooter.vue'
import { useMasterInfoStore } from '@stores/MasterInfo';

useMasterInfoStore();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
