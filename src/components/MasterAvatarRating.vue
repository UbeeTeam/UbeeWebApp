<script setup lang="ts">
import ServiceExperienceBadge from "./UI/ServiceExperienceBadgeUI.vue";
import MasterFeedbackBadgeUI from "./UI/MasterFeedbackBadgeUI.vue";
import AvatarBaseUi from "./UI/AvatarBaseUi.vue";
import type { Props } from "@/interface/MasterAvatarRating";

const props = withDefaults( defineProps<Props>(), {
    isMasterFormPage: false,
});

</script>

<template>
  <div class="d-flex align-items-center justify-content-center master-info">
    <AvatarBaseUi 
        :is-small-avatar="isMasterFormPage"
    />
    <div
      class="d-flex flex-grow-1 flex-wrap justify-content-center justify-content-sm-start pt-2 pt-sm-0 ps-sm-2 master-skills"
    >
      <ServiceExperienceBadge />
      <MasterFeedbackBadgeUI :is-master-form-page="isMasterFormPage"/>
    </div>
  </div>
</template>
