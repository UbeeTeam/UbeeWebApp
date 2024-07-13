import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ModalAppointmentSteps } from '@/types/enums/modalAppointmentSteps'; 

export const useModalStore = defineStore('modalAppointmentStore', () => {

    const currentStepForAppointmentModal = ref<ModalAppointmentSteps>(ModalAppointmentSteps.PHONE_NUMBER);
    const isProceedButtonDisableForAppointmentModal = ref<boolean>(true);
    const errorMessage = ref<string>('');

    const changeCurrentStepFor = async (appointmentStep: ModalAppointmentSteps): Promise<void> => {
        currentStepForAppointmentModal.value = appointmentStep;
        errorMessage.value = '';
    }

    const setValueIsProceedButtonEnableForAppointmentModal = (value: boolean) => {
        isProceedButtonDisableForAppointmentModal.value = value;
    }

    const setErrorMessage = (message: string) => {
        errorMessage.value = message;
    }

    return {
        isProceedButtonDisableForAppointmentModal,
        currentStepForAppointmentModal,
        errorMessage,

        setValueIsProceedButtonEnableForAppointmentModal,
        changeCurrentStepFor,
        setErrorMessage
    };
});
