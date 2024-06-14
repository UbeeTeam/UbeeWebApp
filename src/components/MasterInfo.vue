<script setup lang="ts">
import MasterAvatarRating from './MasterAvatarRating.vue';
import AppointmentBookingButton from "./UI/AppointmentBookingButton.vue";
import MasterLocationMap from './MasterLocationMap.vue';
import type { Props } from '@/interfaces/MasterInfoInterface';

const props = defineProps<Props>();
</script>

<template>
  <section class="master rounded-4">
    <h2 class="m-0 mb-3 block-header">{{ masterData.Name }}</h2>
    <div class="row">
      <div class="col-12 col-md-7">
        <MasterAvatarRating
          :master-data="masterData"
        />
        <RouterLink to="/master-form">
          <AppointmentBookingButton />
        </RouterLink>
      </div>

      <div class="col-12 col-md-5 mt-3 mt-md-0 master-map">
        <MasterLocationMap
          :avatar-url="masterData.AvatarSignedUrl"
          :coordinates="[masterData.GeoLatitude, masterData.GeoLongitude]"
        />
      </div>
      
    </div>
    <div class="row mt-3 master-description">
      <div class="col">
        {{ masterData.Description }}
      </div>
    </div>
  </section>
</template>
