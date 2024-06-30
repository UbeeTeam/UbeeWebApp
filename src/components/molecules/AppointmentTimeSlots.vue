<script setup lang="ts">
import FreeTimeSlotBadge from '@atoms/FreeTimeSlotBadge.vue';
import { useMasterInfoStore } from '@/stores/MasterInfo';
import cuid  from 'cuid';
const masterStore = useMasterInfoStore();

</script>

<template>
    <div class="col-12 col-sm-6 ps-sm-4 appointment-time">
            <h3 class="mt-4 mb-3 block-subheader">
                Выберите время
            </h3>
            <ul v-if="masterStore.masterFreeTimeSlotsForDate?.timeSlots.length" class="d-flex flex-wrap p-0 form-datetime">                    
                <FreeTimeSlotBadge
                    v-for="(timeSlot) in masterStore.masterFreeTimeSlotsForDate.timeSlots"
                    :key="cuid()"
                    :time="timeSlot"
                />
            </ul>
            <h3 class="mt-4 mb-3 block-subheader" v-else>Нет свободных слотов!</h3>
        </div>
</template>