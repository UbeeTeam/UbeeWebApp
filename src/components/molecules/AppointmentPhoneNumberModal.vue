<script setup lang="ts">
import { useModalStore } from '@/stores/ModalAppointment'
import ModalTemplate from '@templates/ModalTemplate.vue'
import { ref, watch } from 'vue'

const modalStore = useModalStore()
const emit = defineEmits(['nextAction'])

const phoneNumber = defineModel<string>()
const isPhoneNumberEnter = ref(false)
const isNumberValid = ref(false)

watch(phoneNumber, (newValue) => {
  if (newValue) {
    isPhoneNumberEnter.value = true
    isNumberValid.value = true
    modalStore.setValueIsProceedButtonEnableForAppointmentModal(false)
  } else {
    isNumberValid.value = false
    modalStore.setValueIsProceedButtonEnableForAppointmentModal(true)
  }
})
</script>

<template>
  <ModalTemplate
    :next-button-text="'Далее...'"
    :title="'Вы тут впервые'"
    @next-action="emit('nextAction')"
  >
    <p>Авторизуйтесь для записи к мастеру.</p>
    <p>Введите номер телефона, мы пришлем код подтверждения.</p>
    <div class="input-group my-3">
      <vue-tel-input
        v-model="phoneNumber"
        :only-countries="['ru', 'kz', 'by']"
        default-country="ru"
        :validCharactersOnly="true"
        :input-options="{
          showDialCode: true,
          placeholder: 'Введите номер телефона',
          inputmode: 'numeric'
        }"
      />
    </div>

    <p v-if="modalStore.errorMessage" style="color: red">{{ modalStore.errorMessage }}</p>
    <p v-if="!isNumberValid && isPhoneNumberEnter" style="color: red">Введите корректный номер</p>

    <p class="appointment-agree">
      Продолжая, вы соглашаетесь с
      <a href="https://docs.google.com/document/d/...">Политикой конфиденциальности</a>
      и
      <a href="https://docs.google.com/document/d/...">Пользовательским соглашением</a>
    </p>
  </ModalTemplate>
</template>

<style scoped>
::v-deep(.vue-tel-input) {
  width: 100%;
}
::v-deep(.vti__input) {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
