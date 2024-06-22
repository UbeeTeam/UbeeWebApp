<script setup lang=ts>
import type { Props } from '@/types/components/atoms/ButtonPrimaryInterface.ts';
import { defineProps } from 'vue';

defineProps<Props>();
</script>

<template>
   <button class="btn-primary">{{ buttonText }}</button>
</template>