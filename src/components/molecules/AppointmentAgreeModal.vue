<script setup lang="ts">
const model = defineModel();
</script>

<template>
    <p>Введите последние 4 цифры номера, с которого сейчас поступит звонок.</p>
    <div class="my-3">
        <input type="text" v-model="model" class="form-control">
    </div>
    <p class="appointment-agree">
        Получить код по SMS
    </p>
</template>