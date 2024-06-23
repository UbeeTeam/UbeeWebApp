<script setup lang="ts">
import type { Props } from '@/types/components/atoms/ServiceExperienceBadgeInterface'

defineProps<Props>()
</script>

<template>
  <div class="d-flex flex-nowrap rounded-pill master-skill">
    <span>{{ activity.activityTemplateName }}</span>
    <span class="rounded-pill">{{ activity.experience }}</span>
  </div>
</template>
