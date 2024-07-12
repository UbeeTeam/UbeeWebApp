import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ModalAppointmentSteps } from '@/types/enums/modalAppointmentSteps'; 

export const useModalStore = defineStore('modalAppointmentStore', () => {

    const currentStepForAppointmentModal = ref<ModalAppointmentSteps>(ModalAppointmentSteps.PHONE_NUMBER);
    const isProceedButtonDisableForAppointmentModal = ref<boolean>(true);

    const changeCurrentStepFor = async (appointmentStep: ModalAppointmentSteps): Promise<void> => {
        currentStepForAppointmentModal.value = appointmentStep;
    }

    const setValueIsProceedButtonEnableForAppointmentModal = (value: boolean) => {
        isProceedButtonDisableForAppointmentModal.value = value;
    }

    return {
        isProceedButtonDisableForAppointmentModal,
        currentStepForAppointmentModal,
        setValueIsProceedButtonEnableForAppointmentModal,
        changeCurrentStepFor,
    };
});
