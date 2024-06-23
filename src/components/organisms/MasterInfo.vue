<script setup lang="ts">
import MasterAvatarRating from '@molecules/MasterAvatarRating.vue'
import AppointmentBookingButton from '@atoms/AppointmentBookingButton.vue'
import MasterLocationMap from '@molecules/MasterLocationMap.vue'
import type { Props } from '@/types/components/organisms/MasterInfoInterface'

defineProps<Props>()
</script>

<template>
  <section class="master rounded-4">
    <h2 class="m-0 mb-3 block-header">{{ masterData.fullName }}</h2>
    <div class="row">
      <div class="col-12 col-md-7">
        <MasterAvatarRating :master-data="masterData" />
        <RouterLink to="/master-form">
          <AppointmentBookingButton />
        </RouterLink>
      </div>

      <div class="col-12 col-md-5 mt-3 mt-md-0 master-map">
        <MasterLocationMap
          :avatar-url="masterData.avatarSignedUrl"
          :coordinates="[masterData.geoLatitude, masterData.geoLongitude]"
        />
      </div>
    </div>
    <div class="row mt-3 master-description">
      <div class="col">
        {{ masterData?.description }}
      </div>
    </div>
  </section>
</template>
