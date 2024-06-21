<script setup lang="ts">
import ServiceExperienceBadge from './UI/ServiceExperienceBadgeUI.vue'
import MasterFeedbackBadgeUI from './UI/MasterFeedbackBadgeUI.vue'
import AvatarBaseUi from './UI/AvatarBaseUi.vue'
import type { Props } from '@interfaces/MasterAvatarRatingInterface'

withDefaults(defineProps<Props>(), {
  isMasterFormPage: false
})
</script>

<template>
  <div class="d-flex align-items-center justify-content-center master-info">
    <AvatarBaseUi :is-small-avatar="isMasterFormPage" :src="masterData.AvatarSignedUrl" />
    <div class="d-flex flex-wrap ms-2 p-0 master-skills">
      <ServiceExperienceBadge
        v-for="activity in masterData.MasterActivities"
        :key="activity.Id"
        :activity="activity"
      />
      <MasterFeedbackBadgeUI
        :is-master-form-page="isMasterFormPage"
        :raiting="masterData.Rating"
        :feedback-count="masterData.FeedBackCount"
      />
    </div>
  </div>
</template>
