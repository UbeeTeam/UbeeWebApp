import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ModalAppointmentSteps } from '@/types/enums/modalAppointmentSteps'; 
import { useGlobalStore } from './Global';

export const useModalStore = defineStore('modalAppointmentStore', () => {

    const currentStepForAppointmentModal = ref<ModalAppointmentSteps>(ModalAppointmentSteps.PHONE_NUMBER);
    const isProceedButtonEnableForAppointmentModal = ref<boolean>(true);
    const isWaitingBeforeNextStep = ref<boolean>(false);

    const nextStepForAppointmentModal = async(): Promise<void> => {
        if (currentStepForAppointmentModal.value < ModalAppointmentSteps.SUCCESS) {
            isWaitingBeforeNextStep.value = true;
            await new Promise<void>((resolve) => {
                const stopWaiting = () => {
                    if (!isWaitingBeforeNextStep.value) {
                      resolve();
                    } else {
                      setTimeout(stopWaiting, 100);
                    }
                };
                stopWaiting();
            });
            currentStepForAppointmentModal.value++;
        }
    };

    const previousStepForAppointmentModal = () => {
        if (currentStepForAppointmentModal.value > ModalAppointmentSteps.PHONE_NUMBER) {
            currentStepForAppointmentModal.value--;
        }
    };

    const changeCurrentSterFor = async (appointmentStep: ModalAppointmentSteps): Promise<void> => {
        currentStepForAppointmentModal.value = appointmentStep;
        isWaitingBeforeNextStep.value = true;
        await new Promise<void>((resolve) => {
            const stopWaiting = () => {
                if (!isWaitingBeforeNextStep.value) {
                  resolve();
                } else {
                  setTimeout(stopWaiting, 100);
                }
            };
            stopWaiting();
        });
    }

    const setValueIsProceedButtonEnableForAppointmentModal = (value: boolean) => {
        isProceedButtonEnableForAppointmentModal.value = value;
    }

    const stopWaitingBeforeNextStep = () => {
        isWaitingBeforeNextStep.value = false;
    }

    return {
        isProceedButtonEnableForAppointmentModal,
        currentStepForAppointmentModal,
        isWaitingBeforeNextStep,
        nextStepForAppointmentModal,
        previousStepForAppointmentModal,
        setValueIsProceedButtonEnableForAppointmentModal,
        stopWaitingBeforeNextStep,
        changeCurrentSterFor,
    };
});
