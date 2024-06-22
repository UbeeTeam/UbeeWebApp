<script setup lang="ts">
import MasterInfo from '@organisms/MasterInfo.vue';
import MasterPortfolio from '@organisms/MasterPortfolio.vue';
import MasterServices from '@organisms/MasterServices.vue';
import ReviewsSection from '@organisms/ReviewsSection.vue';
import MainTemplate from '@templates/MainTemplate.vue';
import { useMasterInfoStore } from '@stores/MasterInfo';
import DownloadBanner from '@organisms/DownloadBanner.vue';
import { ref, onMounted } from 'vue';

const masterStore = useMasterInfoStore()

const showDownloadBanner = ref(true);

onMounted(() => {
  checkStorageAndCloseDownloadBanner();
})

const checkStorageAndCloseDownloadBanner = () => {
  if (localStorage.getItem('isUserCloseDownloadBanner')) {
    showDownloadBanner.value = false;
  }
}
</script>

<template>
 <MainTemplate>
  <template v-if="showDownloadBanner" #banner-slot>
    <DownloadBanner @close-download-banner="showDownloadBanner = false"/>
  </template>

   <MasterInfo :master-data="masterStore.masterData.master" />
   <MasterPortfolio :portfolios="masterStore.masterData.Portfolios" />
   <MasterServices
     :master-services="masterStore.masterData.master.MasterServices"
     :master-activities="masterStore.masterData.master.MasterActivities"
   />
   <ReviewsSection 
     :reviews="masterStore.masterData.Feedbacks"
   />
 </MainTemplate>
</template>
