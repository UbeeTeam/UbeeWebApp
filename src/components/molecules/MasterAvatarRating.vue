<script setup lang="ts">
import ServiceExperienceBadge from '@atoms/ServiceExperienceBadge.vue'
import MasterFeedbackBadge from '@atoms/MasterFeedbackBadge.vue'
import AvatarBase from '@atoms/AvatarBase.vue'
import type { Props } from '@/types/components/molecules/MasterAvatarRatingInterface'

withDefaults(defineProps<Props>(), {
  isMasterFormPage: false
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-center master-info">
    <AvatarBase :is-small-avatar="isMasterFormPage" :src="masterData.AvatarSignedUrl" />
    <div class="d-flex flex-wrap ms-2 p-0 master-skills">
      <ServiceExperienceBadge
        v-for="activity in masterData.MasterActivities"
        :key="activity.Id"
        :activity="activity"
      />
      <MasterFeedbackBadge
        :is-master-form-page="isMasterFormPage"
        :raiting="masterData.Rating"
        :feedback-count="masterData.FeedBackCount"
      />
    </div>
  </div>
</template>
