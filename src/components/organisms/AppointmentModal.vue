<script setup lang="ts">
import AppointmentPhoneNumberModal from '@molecules/AppointmentPhoneNumberModal.vue';
import AppointmentAgreeModal from '@molecules/AppointmentAgreeModal.vue'
import { watch, ref } from 'vue';
import { ModalAppointmentSteps } from '@/types/enums/modalAppointmentSteps';
import { useGlobalStore } from '@/stores/Global';
import { useModalStore } from '@/stores/ModalAppointment';
import { callAuthenticator, codeVerifier } from '@/api/customer/customerAppointment';
import AppointmentRegisterCustomerModal from '@molecules/AppointmentRegisterCustomerModal.vue';

const globalStore = useGlobalStore();
const modalStore = useModalStore();

const deviceId = ref('');

const phoneNumber = ref('');
const verificationCode = ref('');

watch(() => modalStore.isWaitingBeforeNextStep, async(newValue) => {
    if (modalStore.isWaitingBeforeNextStep) {
        switch(modalStore.currentStepForAppointmentModal) {
            case ModalAppointmentSteps.PHONE_NUMBER: {
                try {
                    const res = await callAuthenticator('+7' + phoneNumber.value);
                    if (res.isSuccess) {
                        modalStore.stopWaitingBeforeNextStep();
                        deviceId.value = res.deviceId;
                        globalStore.changeModalContentInfoTemplate({
                            title: 'Вы тут впервые',
                            nextButtonText: 'Далее...'
                        });
                    } else {
                        // Доделать после бека
                        modalStore.stopWaitingBeforeNextStep();
                    }
                } catch (error) {
                    console.log(error);
                    alert(error);
                    // modalStore.changeCurrentSterFor(ModalAppointmentSteps.REGISTRATION);
                }
                break;
            };
            case ModalAppointmentSteps.SMS_CODE: {
                try {
                    const res = await codeVerifier({
                        phoneNumber: '+7' + phoneNumber.value,
                        verificationCode: verificationCode.value,
                        deviceId: deviceId.value,
                    });
                    console.log(res);
                    
                } catch (error) {
                    
                }
            }
        }
    }
})

</script>

<template>
    <AppointmentPhoneNumberModal v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.PHONE_NUMBER" v-model="phoneNumber"/>
    <AppointmentAgreeModal v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.SMS_CODE" v-model="verificationCode"/>
    <AppointmentRegisterCustomerModal v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.REGISTRATION"/>
</template>