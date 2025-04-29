<script setup lang="ts">
import type { Props } from '@/types/components/molecules/ServicesSummaryInterface'
import { wordEnding } from '@/utils/helpers'
import { inject } from 'vue'

defineProps<Props>()

const currencySign = inject('currencySign')
</script>

<template>
  <div class="d-flex justify-content-end mt-3 pt-3 appointment-services__total">
    <dl class="m-0">
      <dt class="m-0">Всего выбрано:</dt>
      <dd class="m-0 mt-1">
        <strong>{{ countServices }}</strong>
        {{ wordEnding(countServices, 'услуга', 'услуги', 'услуг') }} на
        <strong>{{ totalPrice }} {{ currencySign }}</strong>
      </dd>
    </dl>
  </div>
</template>
