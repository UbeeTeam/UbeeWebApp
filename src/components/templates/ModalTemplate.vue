<script setup lang="ts">
import { useGlobalStore } from '@/stores/Global';
import { useModalStore } from '@/stores/ModalAppointment';
import type { Props } from '@/types/components/templates/ModalTemplateInterface';
import { ModalAppointmentSteps } from '@/types/enums/modalAppointmentSteps';
import ButtonPrimary from '@atoms/ButtonPrimary.vue';
import { provide, ref } from 'vue';

defineProps<Props>();
const globalStore = useGlobalStore();
const modalStore = useModalStore();

const closeModal = () => {
    globalStore.closeModal();
    modalStore.changeCurrentSterFor(ModalAppointmentSteps.PHONE_NUMBER);
}

const nextAction = () => {
    if (!modalStore.isProceedButtonEnableForAppointmentModal) {
        modalStore.nextStepForAppointmentModal();
    }
}
</script>

<template>
    <div class="modal-header">
        <h1 class="modal-title fs-5">{{ title }}</h1>
        <button type="button" class="btn-close" @click="closeModal"></button>
    </div>
    <div class="modal-body">
        <slot
            
        />
    </div>
    <div class="modal-footer">
        <ButtonPrimary
            @click="nextAction"
            :disabled="modalStore.isProceedButtonEnableForAppointmentModal"
            :button-text="nextButtonText"
            :classes="'btn btn-primary px-3 rounded-pill'"
        />
    </div>
</template>