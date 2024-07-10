<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, watch, onMounted } from 'vue';
import { format } from 'date-fns';
import { useMasterInfoStore } from '@/stores/MasterInfo';

const masterStore = useMasterInfoStore();

const emit = defineEmits(['selectDate']);
const date = ref<Date>(new Date());

onMounted(async () => {
  await masterStore.getFreeTimeSlotsForDate(getFormatedDate());
  masterStore.setSelectedDate(getFormatedDate());
})

const getFormatedDate = (): string => {
  return format(date.value, 'dd-MM-yyyy');
}

watch(date, async () => {
  await masterStore.getFreeTimeSlotsForDate(getFormatedDate());
  masterStore.setSelectedDate(getFormatedDate());
})
</script>

<template>
    <VueDatePicker
      ref="dp"
      v-model="date"
      locale="ru"
      placeholder="Выбрать дату"
      :min-date="new Date()"
      :enable-time-picker="false"
      :six-weeks="true"
      hide-input-icon
      hide-offset-dates
      inline
      auto-apply
      month-name-format="long"
      :month-change-on-scroll="false"
    />
</template>