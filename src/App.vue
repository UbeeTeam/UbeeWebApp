<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMasterInfoStore } from '@stores/MasterInfo';

useMasterInfoStore();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
