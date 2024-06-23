<script setup lang="ts">
import MasterFeedbackBadge from '@atoms/MasterFeedbackBadge.vue'
import UserFeedback from '@molecules/UserFeedback.vue'
import type { Props } from '@/types/components/organisms/ReviewsSectionInterface';
import { useMasterInfoStore } from '@/stores/MasterInfo';

defineProps<Props>();

const masterInfoStore = useMasterInfoStore();
const masterRaitingWithReviewsCount = masterInfoStore.getMasterRaiting;

</script>

<template>
  <section class="comments rounded-4">
    <h2 class="m-0 mb-3 block-header">Отзывы</h2>
    <MasterFeedbackBadge
      :is-reviews-section-badge="true" 
      :feedback-count="masterRaitingWithReviewsCount.feedBackCount" 
      :raiting="masterRaitingWithReviewsCount.rating" 
    />
    <ul class="m-0 mt-3 p-0 reviews">
      <UserFeedback 
        v-for="review in reviews"
        :review="review"
        :key="review.id"
      />
    </ul>
  </section>
</template>
