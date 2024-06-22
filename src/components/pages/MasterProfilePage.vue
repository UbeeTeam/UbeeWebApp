<script setup lang="ts">
import MasterInfo from '@organisms/MasterInfo.vue'
import MasterPortfolio from '@organisms/MasterPortfolio.vue'
import MasterServices from '@organisms/MasterServices.vue'
import ReviewsSection from '@organisms/ReviewsSection.vue'
import MainTemplate from '@templates/MainTemplate.vue'
import { useMasterInfoStore } from '@stores/MasterInfo'

const masterStore = useMasterInfoStore()
</script>

<template>
 <MainTemplate>
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
