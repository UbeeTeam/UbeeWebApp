<script setup lang="ts">
import type { Props } from '@/types/components/organisms/AppointmentActivityInterface';
import ServiceOption from '@atoms/ServiceOption.vue';


defineProps<Props>();

</script>

<template>
    <h4 class="mt-3 mb-2 appointment-services__header">
        {{ activity.activityTemplateName }}
    </h4>
    <div class="appointment-services">

        <ul class="m-0 p-0 service-items">
            <ServiceOption
                v-for="service in activity.masterServices"
                :service="service"
                :is-service-option-for-master-form="true"
            />
        </ul>
    </div>
</template>