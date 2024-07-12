<script setup lang="ts">
import type { Props } from '@/types/components/organisms/NameConfirmationModalInterface';
import ModalTemplate from '@templates/ModalTemplate.vue';


defineProps<Props>();
</script>

<template>
    <ModalTemplate :next-button-text="'Да, это я...'" :title="'С возвращением'">
        <p>Вы {{ userName.firstName }} {{ userName.lastName }}?</p>
    </ModalTemplate>
</template>