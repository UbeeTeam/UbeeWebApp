<script setup lang="ts">
import type { Props } from '@/types/components/organisms/NameConfirmationModalInterface';

defineProps<Props>();
</script>

<template>
    <p>Вы {{ userName.firstName }} {{ userName.lastName }}?</p>
</template>