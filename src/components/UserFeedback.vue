<script setup lang="ts">
import type { Props } from '@/interfaces/UserFeedbackInterface';
import { useMasterInfoStore } from '@/stores/MasterInfo';
import { computed } from 'vue';
import moment from 'moment';

const props = defineProps<Props>();

const masterInfoStore = useMasterInfoStore();
const masterActivities = masterInfoStore.getMasterActivities;

const getMasterActivitiesFromReview = () => {
  return props.review.MasterActivityIds
    .map(reviewActivityId => masterActivities.find(activity => activity.Id === reviewActivityId))
    .filter(masterActivity => masterActivity)
    .map(masterActivity => masterActivity?.ActivityTemplateName)
    .join(', ');
};

const getReviewPublicateDate = () => {
  return moment.unix(+props.review.PublishDate).format('DD.MM.YYYY');
};

const getRoundRaiting = computed(() => {
  return {
    yellowStars: Math.round(props.review.Rate),
    blueStar: 5-Math.round(props.review.Rate),
  };
});
</script>

<template>
  <li class="review">
    <h5 class="d-flex justify-content-between align-items-center m-0">
      <span>{{ review.CustomerName }}</span>
      <figure class="d-flex m-0">
        <img v-for="yellowStar in getRoundRaiting.yellowStars" src="/src/assets/svg/icon-rating-star-yellow.svg" alt="" />
        <img v-for="blueStar in getRoundRaiting.blueStar" src="/src/assets/svg/icon-rating-star-blue.svg" alt="" />
      </figure>
    </h5>
    <strong>{{ getMasterActivitiesFromReview() }}</strong>
    <p class="my-1">{{ review.Comment }}</p>
    <span>Опубликовано — {{ getReviewPublicateDate() }}</span>
  </li>
</template>
