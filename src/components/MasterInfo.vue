<script setup lang="ts">
import ServiceExperienceBadge from './UI/ServiceExperienceBadgeUI.vue';
import MasterFeedbackBadgeUI from './UI/MasterFeedbackBadgeUI.vue';
import AvatarBaseUi from './UI/AvatarBaseUi.vue';
import AppointmentBookingButton from './UI/AppointmentBookingButton.vue';
</script>

<template>
  <section class="master rounded-4">
    <div class="master-info d-flex flex-column flex-sm-row align-items-center">
      <div class="master-info d-flex flex-column flex-sm-row align-items-center">
      <AvatarBaseUi/>
      <div class="d-flex flex-grow-1 flex-wrap justify-content-center justify-content-sm-start pt-2 pt-sm-0 ps-sm-2 master-skills">
        <ServiceExperienceBadge/>
        <MasterFeedbackBadgeUI/>
      </div>
      </div>
    </div>
    <AppointmentBookingButton/>
    <div class="mt-3 master-description">Я сертифицированный мастер по окраске и наращиванию ресничек. Создаю уникальный выразительный взгляд. Пока работаю 2,5-3 часа, поэтому низкая стоимость. Прорабатываю каждую ресничку и не оставляю склеек. Жду вас у себя в кабинете в уютной обстановке.</div>
  </section>
</template>
