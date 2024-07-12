<script setup lang="ts">
import { useModalStore } from '@/stores/ModalAppointment';
import ModalTemplate from '@templates/ModalTemplate.vue';
import { ref, watch } from 'vue';

const modalStore = useModalStore();
const emit = defineEmits(['nextAction']);

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
    <ModalTemplate 
        :next-button-text="'Далее...'" 
        :title="'Вы тут впервые'"
        @next-action="emit('nextAction')"
    >
        <p>Авторизуйтесь для записи к мастеру.</p>
        <p>Для входа в систему нам нужен твой номер телефона, чтобы прислать код подтверждения.</p>
        <div class="input-group my-3">
            <span class="input-group-text" id="basic-addon1">+7</span>
            <input v-model="model" type="text" class="form-control" aria-label="Телефон" aria-describedby="basic-addon1">
        </div>
        <p v-if="!isNumberValid && isPhoneNumberEnter" style="color: red;">Номер не существует</p>
        <p class="appointment-agree">
            Продолжая, вы соглашаетесь c
            <a href="https://docs.google.com/document/d/1wRpO0k0uZcYG1NXEUDOpgnIYA_FS61N9dis1nNQ28OM/edit#heading=h.t44l2btsl1yz">Политикой конфиденциальности</a>
            , а так же
            <a href="https://docs.google.com/document/d/1Bo12aNJAGEw6meQVKFtHGzfAp7MAiSvR_4e6gqsChFg/edit#heading=h.gjdgxs">Пользовательским соглашением</a>
        </p>
    </ModalTemplate>
</template>