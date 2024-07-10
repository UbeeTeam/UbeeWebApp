<script setup lang="ts">
import type { Props } from '@/types/components/molecules/UserFeedbackInterface';
import { computed } from 'vue';
import { format, parse } from 'date-fns';

const props = defineProps<Props>();

const getReviewPublicateDate = () => {
  const parsedDate = parse(props.review.publishDate, 'dd-MM-yyyy HH:mm', new Date());
  return format(parsedDate, 'dd.MM.yyyy');
};

const getRoundRaiting = computed(() => {
  return {
    yellowStars: Math.round(props.review.rate),
    blueStar: 5-Math.round(props.review.rate),
  };
});
</script>

<template>
  <li class="review">
    <h5 class="d-flex justify-content-between align-items-center m-0">
      <span>{{ review.customerName }}</span>
      <figure class="d-flex m-0">
        <img v-for="yellowStar in getRoundRaiting.yellowStars" src="/src/assets/svg/icon-rating-star-yellow.svg" alt="" />
        <img v-for="blueStar in getRoundRaiting.blueStar" src="/src/assets/svg/icon-rating-star-blue.svg" alt="" />
      </figure>
    </h5>
    <strong>{{ review.masterActivitys[0] }}</strong>
    <p class="my-1">{{ review.comment }}</p>
    <span>Опубликовано — {{ getReviewPublicateDate() }}</span>
  </li>
</template>
