<script setup lang="ts">
import { useModalStore } from '@/stores/ModalAppointment';
import { ref, watch } from 'vue';

const modalStore = useModalStore();

const model = defineModel<string>();
const phoneRegex = /^\d{10}$/;

const isNumberValid = ref<boolean | null>(false);
const isPhoneNumberEnter = ref<boolean>(false);

watch(() => model.value, (newValue) => {
    const valueToCheck = newValue ?? '';
    
    if (valueToCheck) {
        isPhoneNumberEnter.value = true;
    }
    
    if (phoneRegex.test(valueToCheck)) {
        isNumberValid.value = true;
        modalStore.setValueIsProceedButtonEnableForAppointmentModal(false);
    } else {
        isNumberValid.value = false;
        modalStore.setValueIsProceedButtonEnableForAppointmentModal(true);
    }
})
</script>

<template>
    <p>Авторизуйтесь для записи к мастеру.</p>
    <p>Для входа в систему нам нужен твой номер телефона, чтобы прислать код подтверждения.</p>
    <div class="input-group my-3">
        <span class="input-group-text" id="basic-addon1">+7</span>
        <input v-model="model" type="text" class="form-control" aria-label="Телефон" aria-describedby="basic-addon1">
    </div>
    <p v-if="!isNumberValid && isPhoneNumberEnter" style="color: red;">Номер не существует</p>
    <p class="appointment-agree">
        Продолжая, вы соглашаетесь c
        <a href="#">Политикой конфиденциальности</a>
        , а так же
        <a href="#">Пользовательским соглашением</a>
    </p>
</template>