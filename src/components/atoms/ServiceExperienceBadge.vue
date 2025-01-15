<script setup lang="ts">
import type { Props } from '@/types/components/atoms/ServiceExperienceBadgeInterface'

defineProps<Props>()

function formatExperienceYears(years: number) {
  const lastDigit = years % 10
  const lastTwoDigits = years % 100

  let suffix = ''

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    suffix = 'лет'
  } else if (lastDigit === 1) {
    suffix = 'год'
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    suffix = 'года'
  } else {
    suffix = 'лет'
  }

  return `${years} ${suffix}`
}
</script>

<template>
  <div class="d-flex flex-nowrap rounded-pill master-skill">
    <span>{{ activity.activityTemplateName }}</span>
    <span class="rounded-pill">{{ formatExperienceYears(activity.experience) }}</span>
  </div>
</template>
