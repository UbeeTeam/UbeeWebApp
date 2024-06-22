<script setup lang="ts">
import MasterAvatarRating from '@molecules/MasterAvatarRating.vue'
import AppointmentServices from '@atoms/AppointmentServices.vue'
</script>

<template>
  <section class="appointment rounded-4">
    <h2 class="m-0 mb-3 block-header">Запись к мастеру Виктория Н.</h2>
    <MasterAvatarRating :is-master-form-page="true" />
    <AppointmentServices />
  </section>
</template>
