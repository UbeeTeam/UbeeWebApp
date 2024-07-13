<script setup lang="ts">
import { ref, watch } from 'vue';
import ModalTemplate from '@templates/ModalTemplate.vue';
import { useModalStore } from '@/stores/ModalAppointment';


const modalStore = useModalStore();


const model = defineModel();

const formData = ref<{ firstName: string, lastName: string, gender: number }>({ firstName: '', lastName: '', gender: 2 });

watch(formData, () => {
  model.value = formData.value;
}, { deep: true });
</script>

<template>
  <ModalTemplate :next-button-text="'Далее...'" :title="'Вы тут впервые'">
    <p>Мы не нашли вас в базе данных наших пользователей. Давайте познакомимся!</p>
    <div class="my-3">
      <label for="firstName" class="form-label">Ваше имя?</label>
      <input v-model="formData.firstName" type="text" class="form-control" id="firstName" placeholder="Имя">
      <label for="lastName" class="form-label">Ваша фамилия?</label>
      <input v-model="formData.lastName" type="text" class="form-control" id="lastName" placeholder="Фамилия">
      <p class="mb-2">Вы…</p>
      <p v-if="modalStore.errorMessage" style="color: red;">{{ modalStore.errorMessage }}</p>
      <div class="form-checkradio">
        <input v-model="formData.gender" type="radio" name="flexRadioDefault" id="flexRadioDefault1" :value="1">
        <label for="flexRadioDefault1">мужчина</label>
      </div>
      <div class="mt-2 form-checkradio">
        <input v-model="formData.gender" type="radio" name="flexRadioDefault" id="flexRadioDefault2" :value="2">
        <label for="flexRadioDefault2">женщина</label>
      </div>
    </div>
  </ModalTemplate>
</template>
