<script setup lang="ts">
import MasterInfo from '@/components/MasterInfo.vue';
import MasterPortfolio from '@/components/MasterPortfolio.vue';
import MasterServices from '@/components/MasterServices.vue';
import ReviewsSection from '@/components/ReviewsSection.vue';
import { useMasterInfoStore } from '@stores/MasterInfo';

const masterStore = useMasterInfoStore();
</script>

<template>
  <main class="container p-0 main">
    <MasterInfo :master-data="masterStore.masterData.master" />
    <MasterPortfolio :portfolios="masterStore.masterData.Portfolios"/>
    <MasterServices 
      :master-services="masterStore.masterData.master.MasterServices"
      :master-activities="masterStore.masterData.master.MasterActivities"
    />
    <ReviewsSection />
  </main>
</template>
