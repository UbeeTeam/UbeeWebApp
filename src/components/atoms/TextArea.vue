<script setup lang="ts">
const model = defineModel();

</script>

<template>
    <textarea v-model="model" name="comment" id="comment" class="d-block rounded-3 m-0 p-2 w-100 form-textarea" cols="40" rows="10"></textarea>
</template>