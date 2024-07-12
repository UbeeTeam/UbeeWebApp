<script setup lang="ts">
import { ref, watch } from 'vue';
import { useModalStore } from '@/stores/ModalAppointment';
import ModalTemplate from '@templates/ModalTemplate.vue';


const modalStore = useModalStore();
const emit = defineEmits(['sendSmsCode']);

const model = defineModel<string>();

const codeRegex = /^\d{4}$/;
const isVerifieCodeValid = ref<boolean>(false);
const isVerifieCodeEnter = ref<boolean>(false);

watch(() => model.value, (newValue) => {
    const valueToCheck = newValue ?? '';
    
    if (valueToCheck) {
        isVerifieCodeEnter.value = true;
    };
    
    if (codeRegex.test(valueToCheck)) {
        isVerifieCodeValid.value = true;
        modalStore.setValueIsProceedButtonEnableForAppointmentModal(false);
    } else {
        isVerifieCodeValid.value = false;
        modalStore.setValueIsProceedButtonEnableForAppointmentModal(true);
    }
})

const sendSmsVerifier = () => {
   emit('sendSmsCode');
}
</script>

<template>
<ModalTemplate :next-button-text="'Подтверждение'" :title="'Подтвердить'">
    <p>Мы отправили вам SMS с кодом — введите его в поле ниже.</p>
    <div class="my-3">
        <input type="text" v-model="model" class="form-control">
    </div>
    <p v-if="!isVerifieCodeValid && isVerifieCodeEnter" style="color: red;">Код должен состоять из 4 цифр</p>
    <p class="appointment-agree" @click="sendSmsVerifier">
        <a href="#">Отправить SMS ещё раз</a>
    </p>
</ModalTemplate>
</template>