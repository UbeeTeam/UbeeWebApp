<script setup lang="ts">
import { defineProps } from 'vue'
import type { Props } from '@/types/components/atoms/MasterFeedbackBadgeInterface'

withDefaults(defineProps<Props>(), {
  isReviewsSectionBadge: false,
  isMasterFormPage: false
})
</script>

<template>
  <div
    class="d-flex justify-content-sm-start w-100 master-rating"
    :class="[
      isReviewsSectionBadge
        ? 'justify-content-start align-items-start'
        : 'justify-content-center align-items-center pt-2'
    ]"
  >
    <span class="ps-3">{{ raiting }}</span>
    <span v-if="!isMasterFormPage" class="ms-2 ps-3">{{ feedbackCount }} отзывов</span>
  </div>
</template>
