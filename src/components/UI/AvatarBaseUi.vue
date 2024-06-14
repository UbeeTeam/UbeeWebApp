<script setup lang="ts">
import type { Props } from '@/interface/UI/AvatarUIInterface';


const props = withDefaults(defineProps<Props>(), {
  isSmallAvatar: false,
});

</script>

<template>
  <div class="master-info d-flex flex-column flex-sm-row align-items-center">
    <figure
      :class="{'master-avatar__small' : isSmallAvatar}"
      class="flex-shrink-0 rounded-circle master-avatar"
      style="border: 2px solid var(--ubee-status-ready)"
    >
      <img
        src="@/assets/images/logo.png"
        class="d-block master-avatar__image"
        alt="master avatar"
      />
    </figure>
  </div>
</template>
