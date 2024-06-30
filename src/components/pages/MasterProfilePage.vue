<script setup lang="ts">
import MasterInfo from '@organisms/MasterInfo.vue';
import MasterPortfolio from '@organisms/MasterPortfolio.vue';
import MasterServices from '@organisms/MasterServices.vue';
import ReviewsSection from '@organisms/ReviewsSection.vue';
import MainTemplate from '@templates/MainTemplate.vue';
import { useMasterInfoStore } from '@stores/MasterInfo';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const masterStore = useMasterInfoStore()

const token = ref<string>("");

onMounted(async() => {
  const tokenString = route.params.token as string;
  token.value = tokenString || '';
  masterStore.setMasterToken(token.value);
  await masterStore.getMasterInfo(token.value);
})
</script>

<template>
 <MainTemplate>
  <template v-if="masterStore.masterData">
    <MasterInfo :master-data="masterStore.masterData" />
    <MasterPortfolio :portfolios="masterStore.masterData.portfolios" />
    <MasterServices
      :master-activities="masterStore.masterData.masterActivities"
    />
    <ReviewsSection 
      :reviews="masterStore.masterData.feedbacks"
    />
  </template>
 </MainTemplate>
</template>
