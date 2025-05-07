<script setup lang="ts">
import AppointmentPhoneNumberModal from '@molecules/AppointmentPhoneNumberModal.vue'
import AppointmentAgreeModal from '@molecules/AppointmentAgreeModal.vue'
import { ref } from 'vue'
import { ModalAppointmentSteps } from '@/types/enums/modalAppointmentSteps'
import { useModalStore } from '@/stores/ModalAppointment'
import {
  callAuthenticator,
  codeVerifier,
  createAppointment,
  smsAuthenticator
} from '@/api/customer/customerAppointment'
import AppointmentRegisterCustomerModal from '@molecules/AppointmentRegisterCustomerModal.vue'
import NameConfirmationModal from '@molecules/NameConfirmationModal.vue'
import { useMasterInfoStore } from '@/stores/MasterInfo'
import AppointmentAgreeSmsModal from '@molecules/AppointmentAgreeSmsModal.vue'
import AppointmentSuccesModal from '@molecules/AppointmentSuccesModal.vue'

const masterStore = useMasterInfoStore()
const modalStore = useModalStore()

const deviceId = ref<string>('')
const phoneNumber = ref<string>('')
const verificationCode = ref<string>('')
const userToken = ref<string>('')
const masterAddressAndPhone = ref<{ masterAddress: string; masterPhoneNumber: string }>({
  masterAddress: '',
  masterPhoneNumber: ''
})
const userNameAndGender = ref<{ firstName: string; lastName: string; gender: number }>({
  firstName: '',
  lastName: '',
  gender: 0
})
const userName = ref<{ firstName: string; lastName: string }>({ firstName: '', lastName: '' })

const nextAction = async () => {
  switch (modalStore.currentStepForAppointmentModal) {
    case ModalAppointmentSteps.PHONE_NUMBER: {
      try {
        const cleanPhoneNumber = phoneNumber.value.replace(/\D/g, '')
        const res = await callAuthenticator(cleanPhoneNumber)
        if (res.isSuccess) {
          modalStore.changeCurrentStepFor(ModalAppointmentSteps.CALL_CODE)
          deviceId.value = res.deviceId
        } else {
          modalStore.setErrorMessage(res.message)
        }
      } catch (error) {
        console.warn(error)
      }
      break
    }
    case ModalAppointmentSteps.CALL_CODE: {
      try {
        const cleanPhoneNumber = phoneNumber.value.replace(/\D/g, '')
        const res = await codeVerifier({
          phoneNumber: cleanPhoneNumber,
          verificationCode: verificationCode.value,
          deviceId: deviceId.value
        })

        if (!res.isSuccess) {
          modalStore.setErrorMessage(res.message)
        }

        if (res.isUserProfileExists) {
          userName.value = {
            firstName: res.firstName,
            lastName: res.lastName
          }
          modalStore.changeCurrentStepFor(ModalAppointmentSteps.NAME_CONFIRMATION)
        } else if (!res.isUserProfileExists && res.isSuccess) {
          modalStore.changeCurrentStepFor(ModalAppointmentSteps.REGISTRATION)
        }

        userToken.value = res.accessToken.token
      } catch (error) {
        console.warn(error)
      }
      break
    }
    case ModalAppointmentSteps.NAME_CONFIRMATION: {
      try {
        const res = await createAppointment(
          {
            masterId: masterStore.masterData?.id,
            timeSlot: masterStore.selectedTime?.timeSlot,
            started: masterStore.selectedTime?.date,
            isAllergic: false,
            description: masterStore.description,
            masterServiceIds: masterStore.listOfServicesAddedToAppointment
          },
          {
            Authorization: 'Bearer ' + userToken.value
          }
        )

        if (res.isSuccess) {
          masterAddressAndPhone.value = {
            masterAddress: res.masterAddress,
            masterPhoneNumber: res.masterPhoneNumber
          }
          modalStore.changeCurrentStepFor(ModalAppointmentSteps.SUCCESS)
        } else {
          modalStore.setErrorMessage(res.message)
        }
      } catch (error) {
        console.warn(error)
      }
      break
    }
    case ModalAppointmentSteps.SMS_CODE: {
      try {
        const cleanPhoneNumber = phoneNumber.value.replace(/\D/g, '')
        const res = await codeVerifier({
          phoneNumber: cleanPhoneNumber,
          verificationCode: verificationCode.value,
          deviceId: deviceId.value
        })

        if (!res.isSuccess) {
          modalStore.setErrorMessage(res.message)
        }

        if (res.isUserProfileExists) {
          userName.value = {
            firstName: res.firstName,
            lastName: res.lastName
          }
          modalStore.changeCurrentStepFor(ModalAppointmentSteps.NAME_CONFIRMATION)
        } else if (!res.isUserProfileExists && res.isSuccess) {
          modalStore.changeCurrentStepFor(ModalAppointmentSteps.REGISTRATION)
        }

        userToken.value = res.accessToken.token
      } catch (error) {
        console.warn(error)
      }
      break
    }
    case ModalAppointmentSteps.REGISTRATION: {
      try {
        const res = await createAppointment(
          {
            masterId: masterStore.masterData?.id,
            timeSlot: masterStore.selectedTime?.timeSlot,
            started: masterStore.selectedTime?.date,
            isAllergic: false,
            description: masterStore.description,
            masterServiceIds: masterStore.listOfServicesAddedToAppointment,
            customerFirstName: userNameAndGender.value.firstName,
            customerLastName: userNameAndGender.value.lastName,
            customerGenderId: userNameAndGender.value.gender
          },
          {
            Authorization: 'Bearer ' + userToken.value
          }
        )

        if (!res.isSuccess) {
          modalStore.setErrorMessage(res.message)
          return
        }

        masterAddressAndPhone.value = {
          masterAddress: res.masterAddress,
          masterPhoneNumber: res.masterPhoneNumber
        }
        modalStore.changeCurrentStepFor(ModalAppointmentSteps.SUCCESS)
      } catch (error) {
        console.warn(error)
      }
      break
    }
  }
}
const sendSmsCode = async () => {
  try {
    const cleanPhoneNumber = phoneNumber.value.replace(/\D/g, '')
    const res = await smsAuthenticator(cleanPhoneNumber)
    if (res.isSuccess) {
      deviceId.value = res.deviceId
    }
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <AppointmentPhoneNumberModal
    v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.PHONE_NUMBER"
    v-model="phoneNumber"
    @next-action="nextAction"
  />
  <AppointmentAgreeModal
    v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.CALL_CODE"
    v-model="verificationCode"
    @next-action="nextAction"
    @send-sms-code="sendSmsCode"
  />
  <AppointmentRegisterCustomerModal
    v-model="userNameAndGender"
    v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.REGISTRATION"
    @next-action="nextAction"
  />
  <NameConfirmationModal
    :userName="userName"
    v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.NAME_CONFIRMATION"
    @next-action="nextAction"
  />
  <AppointmentAgreeSmsModal
    v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.SMS_CODE"
    v-model="verificationCode"
    @next-action="nextAction"
    @send-sms-code="sendSmsCode"
  />
  <AppointmentSuccesModal
    :masterAddressAndPhone
    v-if="modalStore.currentStepForAppointmentModal === ModalAppointmentSteps.SUCCESS"
    @next-action="nextAction"
  />
</template>
