<script setup lang="ts">
import MasterAvatarRating from './MasterAvatarRating.vue';
import AppointmentBookingButton from "./UI/AppointmentBookingButton.vue";
import MasterLocationMap from './MasterLocationMap.vue';

</script>

<template>
  <section class="master rounded-4">
    <h2 class="m-0 mb-3 block-header">Виктория Н.</h2>
    <div class="row">
      <div class="col-12 col-md-7">
        <MasterAvatarRating/>
        <RouterLink to="/master-form">
          <AppointmentBookingButton />
        </RouterLink>
      </div>

      <div class="col-12 col-md-5 mt-3 mt-md-0 master-map">
        <MasterLocationMap/>
        <!-- <div class="rounded-2" id="map" style="background-color:#ddd"></div> -->
      </div>
      
    </div>
    <div class="row mt-3 master-description">
      Я сертифицированный мастер по окраске и наращиванию ресничек. Создаю уникальный выразительный
      взгляд. Пока работаю 2,5-3 часа, поэтому низкая стоимость. Прорабатываю каждую ресничку и не
      оставляю склеек. Жду вас у себя в кабинете в уютной обстановке.
    </div>
  </section>
</template>
