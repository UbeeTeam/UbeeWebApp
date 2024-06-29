<script setup lang="ts">
import type { Props } from '@/types/components/molecules/ServicesSummaryInterface';
import { wordEnding } from '@/utils/helpers';

defineProps<Props>();

</script>

<template>
    <div class="d-flex justify-content-end mt-3 pt-3 appointment-services__total">
        <dl class="m-0">
            <dt class="m-0">Всего выбрано:</dt>
            <dd class="m-0 mt-1">
                <strong>{{ countServices }}</strong>
                {{ wordEnding(countServices, 'услуга', 'услуги', 'услуг') }} на
                <strong>{{ totalPrice }} ₽</strong>
            </dd>
        </dl>
    </div>
</template>