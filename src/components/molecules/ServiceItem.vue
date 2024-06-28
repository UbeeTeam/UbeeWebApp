<script setup lang="ts">
import type { Props } from '@/types/components/molecules/ServiceItemInterface';
import ServiceOption from '@atoms/ServiceOption.vue';

defineProps<Props>()
</script>

<template>
  <div class="accordion-item service">
    <h2 class="accordion-header service-header">
      <button
        class="d-flex flex-column justify-content-start align-items-start pe-4 accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#service${masterActivity.id}`"
        aria-expanded="false"
        :aria-controls="`#service${masterActivity.id}`"
      >
        <strong>{{ masterActivity.activityTemplateName }}</strong>
        <span class="mt-1">Опыт работы&nbsp;— {{ masterActivity.experience }}</span>
      </button>
    </h2>
    <div :id="`service${masterActivity.id}`" class="accordion-collapse collapse">
      <div class="accordion-body service-content">
        <ul class="m-0 p-0 service-items">
          <ServiceOption
            v-for="service in masterServices"
            :service="service"
          />
          <!-- <li v-for="service in masterServices" :key="service.id" class="d-flex service-item">
            <span class="w-100">{{ service.serviceName }}</span>
            <strong class="flex-shrink-0">{{ service.cost }} ₽</strong>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
