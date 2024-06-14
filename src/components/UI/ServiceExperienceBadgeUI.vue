<script setup lang="ts">
import type { Props } from '@/interfaces/UI/ServiceExperienceBadgeUIInterface'

defineProps<Props>();
</script>

<template>
  <div class="d-flex flex-nowrap rounded-pill master-skill">
    <span>{{ activity.ActivityTemplateName }}</span>
    <span class="rounded-pill">{{activity.Experience}}</span>
  </div>
</template>
