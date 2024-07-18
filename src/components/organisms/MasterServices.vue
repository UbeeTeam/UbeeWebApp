<script setup lang="ts">
import ServiceItem from '@molecules/ServiceItem.vue'
import type { Props } from '@/types/components/organisms/MasterServiceInterface'

defineProps<Props>()
</script>

<template>
  <section class="services rounded-4">
    <h2 class="m-0 mb-3 block-header">Услуги</h2>
    <div class="accordion rounded-4">
      <ServiceItem
        v-for="activity in masterActivities"
        :key="activity.Id"
        :master-activity="activity"
        :master-services="activity.masterServices"
      />
    </div>
  </section>
</template>
