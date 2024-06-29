<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
    <a href="#" @click.prevent="goBack">
    <slot/>
  </a>
</template>