<script setup lang="ts">
import MasterAvatarRating from '@molecules/MasterAvatarRating.vue'
import AppointmentServicesTitle from '@atoms/AppointmentServicesTitle.vue'
import AppointmentActivity from '@organisms/AppointmentActivity.vue'
import ServicesSummary from '@molecules/ServicesSummary.vue'
import type { Props } from '@/types/components/organisms/AppointmentSectionInterface'
import AppointmentDate from '@molecules/AppointmentDate.vue'
import { useMasterInfoStore } from '@/stores/MasterInfo'
import AppointmentComment from '@molecules/AppointmentComment.vue'
import AppointmentTimeSlots from '@molecules/AppointmentTimeSlots.vue'
import ButtonPrimary from '@atoms/ButtonPrimary.vue'
import AppointmentModal from '@organisms/AppointmentModal.vue'
import { useGlobalStore } from '@/stores/Global'
import ModalTemplate from '@templates/ModalTemplate.vue'
import { shallowRef } from 'vue'

defineProps<Props>()

const masterStore = useMasterInfoStore()
const globalStore = useGlobalStore()

const showAppointmentModal = () => {
  globalStore.openModal({
    content: shallowRef(AppointmentModal),
    template: shallowRef(ModalTemplate),
    templateProps: {
      title: 'Авторизация',
      nextButtonText: 'Далее...'
    }
  })
}
</script>

<template>
  <section class="appointment rounded-4">
    <h2 class="m-0 mb-3 block-header">Запись к мастеру {{ masterData.fullName }}</h2>
    <MasterAvatarRating :is-master-form-page="true" :master-data="masterData" />
    <AppointmentServicesTitle />
    <AppointmentActivity
      v-for="activity in masterData.masterActivities"
      :key="activity.id"
      :activity="activity"
    />
    <ServicesSummary
      :count-services="masterStore.countServicesAddedToAppointment"
      :total-price="masterStore.totalPriceOfServicesToAppointment"
    />
    <div class="row" v-show="masterStore.countServicesAddedToAppointment !== 0">
      <AppointmentDate />
      <AppointmentTimeSlots />
    </div>
    <AppointmentComment />
    <div class="mt-4 appointment-button">
      <ButtonPrimary
        @click="showAppointmentModal"
        :disabled="
          !masterStore.countServicesAddedToAppointment || !masterStore.selectedTime.timeSlot
        "
        :button-text="'Записаться'"
        :classes="'btn btn-primary px-3 rounded-pill'"
      />
    </div>
  </section>
</template>
