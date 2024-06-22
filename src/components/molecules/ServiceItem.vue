<script setup lang="ts">
import type { Props } from '@/types/ServiceItemInterface'

defineProps<Props>()
</script>

<template>
  <div class="accordion-item service">
    <h2 class="accordion-header service-header">
      <button
        class="d-flex flex-column justify-content-start align-items-start pe-4 accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#service${masterActivity.Id}`"
        aria-expanded="false"
        :aria-controls="`#service${masterActivity.Id}`"
      >
        <strong>{{ masterActivity.ActivityTemplateName }}</strong>
        <span class="mt-1">Опыт работы&nbsp;— {{ masterActivity.Experience }}</span>
      </button>
    </h2>
    <div :id="`service${masterActivity.Id}`" class="accordion-collapse collapse">
      <div class="accordion-body service-content">
        <ul class="m-0 p-0 service-items">
          <li v-for="service in masterServices" :key="service.Id" class="d-flex service-item">
            <span class="w-100">{{ service.Name }}</span>
            <strong class="flex-shrink-0">{{ service.Cost }} ₽</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
