<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, watch, onMounted, computed } from 'vue'
import { useMasterInfoStore } from '@/stores/MasterInfo'
import { getFormatedDate } from '@/utils/helpers/dateHelper'

const masterStore = useMasterInfoStore()

const emit = defineEmits(['selectDate'])

const date = ref<Date>(new Date())

const availableDatesRaw = computed(() => {
  return masterStore.daysWithFreeTimeSlots?.days || []
})

onMounted(async () => {
  const formatted = getFormatedDate(date.value)

  await masterStore.getFreeTimeSlotsForDate(formatted)
  masterStore.setSelectedDate(formatted)
  await masterStore.getDaysWithFreeTimeSlots()

  emit('selectDate', formatted)
})

watch(date, async () => {
  const formatted = getFormatedDate(date.value)

  await masterStore.getFreeTimeSlotsForDate(formatted)
  masterStore.setSelectedDate(formatted)

  emit('selectDate', formatted)
})

watch(
  () => masterStore.countServicesAddedToAppointment,
  async () => {
    await masterStore.getDaysWithFreeTimeSlots()
  }
)

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

const allowedDates = computed(() => {
  return availableDatesRaw.value.map(parseDate)
})
</script>

<template>
  <VueDatePicker
    v-model="date"
    locale="ru"
    placeholder="Выбрать дату"
    :min-date="new Date()"
    :enable-time-picker="false"
    :six-weeks="true"
    inline
    auto-apply
    month-name-format="long"
    :month-change-on-scroll="false"
    :allowed-dates="allowedDates"
  />
</template>
