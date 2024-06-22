<script setup lang="ts">
import type { Props } from '@/types/components/atoms/IconSvgInterface'
import { defineProps } from 'vue'

defineProps<Props>()
</script>

<template>
  <div class="icon-wrapper">
    <svg
      :class="className"
      xmlns="http://www.w3.org/2000/svg"
      class="w-0.875 h-0.875"
      viewBox="0 0 24 24"
    >
      <use :href="`/src/assets/index.svg#${name}`"></use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.icon-wrapper {
  width: 24px;
}
</style>
