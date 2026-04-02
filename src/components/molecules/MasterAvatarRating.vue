<script setup lang="ts">
import { computed } from 'vue'
import ServiceExperienceBadge from '@atoms/ServiceExperienceBadge.vue'
import MasterFeedbackBadge from '@atoms/MasterFeedbackBadge.vue'
import AvatarBase from '@atoms/AvatarBase.vue'
import type { Props } from '@/types/components/molecules/MasterAvatarRatingInterface'
import avatarMale from '@/assets/images/avatar_male.png'
import avatarFemale from '@/assets/images/avatar_female.png'

const props = defineProps<Props>()

const avatarUrl = computed(() => {
  if (props.masterData.avatarSignedUrl) {
    return props.masterData.avatarSignedUrl
  }
  return props.masterData.genderId === 2 ? avatarFemale : avatarMale
})
</script>

<template>
  <div
    class="d-flex align-items-center master-info"
    :class="{ 'justify-content-center': !isMasterFormPage }"
  >
    <AvatarBase :is-small-avatar="isMasterFormPage" :src="avatarUrl" />
    <div class="d-flex flex-wrap ms-2 p-0 master-skills">
      <ServiceExperienceBadge
        v-for="activity in masterData.masterActivities"
        :key="activity.id"
        :activity="activity"
      />
      <MasterFeedbackBadge
        :is-master-form-page="isMasterFormPage"
        :raiting="masterData.rating"
        :feedback-count="masterData.feedBackCount"
      />
    </div>
  </div>
</template>
