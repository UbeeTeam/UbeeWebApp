<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, watch, onMounted } from 'vue'
import { useMasterInfoStore } from '@/stores/MasterInfo'
import { getFormatedDate } from '@/utils/helpers/dateHelper'

const masterStore = useMasterInfoStore()

const emit = defineEmits(['selectDate'])
const date = ref<Date>(new Date())

onMounted(async () => {
  await masterStore.getFreeTimeSlotsForDate(getFormatedDate(date.value))
  masterStore.setSelectedDate(getFormatedDate(date.value))
})

watch(date, async () => {
  await masterStore.getFreeTimeSlotsForDate(getFormatedDate(date.value))
  masterStore.setSelectedDate(getFormatedDate(date.value))
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
