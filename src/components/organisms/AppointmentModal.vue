<script setup lang="ts">
import AppointmentPhoneNumberModal from '@molecules/AppointmentPhoneNumberModal.vue';
import AppointmentAgreeModal from '@molecules/AppointmentAgreeModal.vue'
import { watch, ref } from 'vue';
import { ModalAppointmentSteps } from '@/types/enums/modalAppointmentSteps';
import { useGlobalStore } from '@/stores/Global';
import { useModalStore } from '@/stores/ModalAppointment';
import { callAuthenticator, codeVerifier, createAppointment, smsAuthenticator } from '@/api/customer/customerAppointment';
import AppointmentRegisterCustomerModal from '@molecules/AppointmentRegisterCustomerModal.vue';
import NameConfirmationModal from '@molecules/NameConfirmationModal.vue';
import { useMasterInfoStore } from '@/stores/MasterInfo';
import AppointmentAgreeSmsModal from '@molecules/AppointmentAgreeSmsModal.vue';

const masterStore = useMasterInfoStore();
const globalStore = useGlobalStore();
const modalStore = useModalStore();

const deviceId = ref<string>('');

const phoneNumber = ref<string>('');
const verificationCode = ref<string>('');
const userToken = ref<string>('');

const userName = ref<{firstName: string, lastName: string}>({firstName: '', lastName: ''});

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
                        globalStore.changeModalContentInfoTemplate({
                            title: 'Подтверждение',
                            nextButtonText: 'Подтвердить'
                        });
                        modalStore.stopWaitingBeforeNextStep();
                    }
                } catch (error) {
                    console.warn(error);
                }
                break;
            };
            case ModalAppointmentSteps.CALL_CODE: {
                try {
                    const res = await codeVerifier({
                        phoneNumber: '+7' + phoneNumber.value,
                        verificationCode: verificationCode.value,
                        deviceId: deviceId.value,
                    });

                    if (res.isUserProfileExists && res.isSuccess) {
                        globalStore.changeModalContentInfoTemplate({
                            title: 'С возвращением',
                            nextButtonText: 'Да, это я...'
                        });
                        userName.value = {
                            firstName: res.firstName,
                            lastName: res.lastName
                        }
                        modalStore.stopWaitingBeforeNextStep();
                    } else if (!res.isUserProfileExists && res.isSuccess) {
                        modalStore.changeCurrentSterFor(ModalAppointmentSteps.REGISTRATION);
                    }

                    userToken.value = res.accessToken.token;
                } catch (error) {
                    console.warn(error);
                }
                break;
            };
            case ModalAppointmentSteps.NAME_CONFIRMATION: {
                try {
                    const res = await createAppointment({
                        masterId: masterStore.masterData?.id,
                        timeSlot: masterStore.selectedTime?.timeSlot,
                        started: masterStore.selectedTime?.date,
                        isAllergic: false,
                        description: masterStore.description,
                        masterServiceIds: masterStore.listOfServicesAddedToAppointment,
                    }, {
                        Authorization: 'Bearer ' + userToken.value,
                    });
                    
                } catch (error) {
                    console.warn(error);
                    
                }
                break;
            };
            case ModalAppointmentSteps.SMS_CODE: {
                try {
                    const res = await smsAuthenticator('+7' + phoneNumber.value)

                    if (res.isSuccess) {
                        userToken.value = res.accessToken.token;
                        globalStore.changeModalContentInfoTemplate({
                            title: 'Заявка отправлена!',
                            nextButtonText: '',
                            isShowFooter: false,
                        })
                        modalStore.stopWaitingBeforeNextStep();
                    }   
                } catch (error) {
                    console.warn(error);
                }
                break;
            }
        }
    }
})

</script>

<template>
    <AppointmentPhoneNumberModal v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.PHONE_NUMBER" v-model="phoneNumber"/>
    <AppointmentAgreeModal v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.CALL_CODE" v-model="verificationCode"/>
    <AppointmentRegisterCustomerModal v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.REGISTRATION"/>
    <NameConfirmationModal :userName="userName" v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.NAME_CONFIRMATION"/>
    <AppointmentAgreeSmsModal v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.SMS_CODE"/>
</template>