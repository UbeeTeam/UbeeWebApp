<script setup lang="ts">
import { useMasterInfoStore } from '@/stores/MasterInfo';
import TextArea from '@atoms/TextArea.vue';
import { ref, watch } from 'vue';

const masterStore = useMasterInfoStore();

const description = ref<string>('');

let timeout: ReturnType<typeof setTimeout> | null = null;

watch(description, (newValue) => {
    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
        masterStore.setDescription(description.value);
    }, 3000);
})
</script>

<template>
    <h3 class="mt-4 mb-3 block-subheader">
        Комментарий мастеру
    </h3>
    <TextArea v-model="description"/>
</template>