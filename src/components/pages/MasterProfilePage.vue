<script setup lang="ts">
import MasterInfo from '@organisms/MasterInfo.vue';
import MasterPortfolio from '@organisms/MasterPortfolio.vue';
import MasterServices from '@organisms/MasterServices.vue';
import ReviewsSection from '@organisms/ReviewsSection.vue';
import MainTemplate from '@templates/MainTemplate.vue';
import { useMasterInfoStore } from '@stores/MasterInfo';
import { useGlobalStore } from '@stores/Global';
import DownloadBanner from '@organisms/DownloadBanner.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const masterStore = useMasterInfoStore()

const showDownloadBanner = ref<boolean>(true);
const token = ref<string>("");

onMounted(async() => {
  const tokenString = route.params.token as string;
  token.value = tokenString || '';
  await masterStore.getMasterInfo(token.value);

  checkStorageAndCloseDownloadBanner();
})

const checkStorageAndCloseDownloadBanner = () => {
  if (localStorage.getItem('isUserCloseDownloadBanner')) {
    showDownloadBanner.value = false;
  }
}
</script>

<template>
 <MainTemplate v-if="masterStore.masterData">
  <template v-if="showDownloadBanner" #banner-slot>
    <DownloadBanner @close-download-banner="showDownloadBanner = false"/>
  </template>

   <MasterInfo :master-data="masterStore.masterData" />
   <MasterPortfolio :portfolios="masterStore.masterData.portfolios" />
   <MasterServices
     :master-activities="masterStore.masterData.masterActivities"
   />
   <ReviewsSection 
     :reviews="masterStore.masterData.feedbacks"
   />
 </MainTemplate>
</template>
