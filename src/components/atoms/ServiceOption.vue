<script setup lang="ts">
import { useMasterInfoStore } from '@/stores/MasterInfo';
import { ServiceActions } from '@/types/components/actions/services/serviceActions';
import type { Props } from '@/types/components/atoms/ServiceOptionInterface';
import { ref } from 'vue';

const props = withDefaults(defineProps<Props>(), {
    isServiceOptionForMasterForm: false
});

const masterStore = useMasterInfoStore();

const isInputChecked = ref(false);

const toggleServiceAdd = () => {
    if (!isInputChecked.value) {
        masterStore.changeCountServicesAndTotalPriceAddedToAppointment({
            action: ServiceActions.ADD,
            price: props.service.cost
        });
    } else {
        masterStore.changeCountServicesAndTotalPriceAddedToAppointment({
            action: ServiceActions.DELETE,
            price: props.service.cost
        });
    }
}

</script>

<template>
    <li :key="service.id" class="d-flex service-item" :class="{'is-active' : isInputChecked}">
        <label v-if="isServiceOptionForMasterForm" class="d-block appointment-service__select">
            <input @click.stop="toggleServiceAdd" v-model="isInputChecked" type="checkbox" class="service-checkbox">
            <span></span>
        </label>
        <strong class="flex-shrink-0 service-item__title">
            {{ service.serviceName }}
            <span class="mt-1">
                {{ service.duration }} минут
            </span>
        </strong>
        <strong class="flex-shrink-0 service-item__price">{{ service.cost }} ₽</strong>
    </li>
</template>