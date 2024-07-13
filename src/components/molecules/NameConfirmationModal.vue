<script setup lang="ts">
import type { Props } from '@/types/components/organisms/NameConfirmationModalInterface';
import ModalTemplate from '@templates/ModalTemplate.vue';
import { useModalStore } from '@/stores/ModalAppointment';


const modalStore = useModalStore();

defineProps<Props>();
</script>

<template>
    <ModalTemplate :next-button-text="'Да, это я...'" :title="'С возвращением'">
        <p>Вы {{ userName.firstName }} {{ userName.lastName }}?</p>
        <p v-if="modalStore.errorMessage" style="color: red;">{{ modalStore.errorMessage }}</p>
    </ModalTemplate>
</template>