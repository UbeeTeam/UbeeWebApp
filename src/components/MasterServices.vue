<script setup lang="ts">
import ServiceItem from '@/components/ServiceItem.vue'
import type { Props } from '@interfaces/MasterServiceInterface'

defineProps<Props>()
</script>

<template>
  <section class="services">
    <h2 class="m-0 mb-3 block-header">Услгуи</h2>
    <div class="accordion rounded-4">
      <ServiceItem
        v-for="activity in masterActivities"
        :key="activity.Id"
        :master-activity="activity"
        :master-services="
          masterServices.filter((service) => activity.Id === service.MasterActivityId)
        "
      />
    </div>
  </section>
</template>
