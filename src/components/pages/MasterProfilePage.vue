<script setup lang="ts">
import MasterInfo from '@organisms/MasterInfo.vue'
import MasterPortfolio from '@organisms/MasterPortfolio.vue'
import MasterServices from '@organisms/MasterServices.vue'
import ReviewsSection from '@organisms/ReviewsSection.vue'
import MainTemplate from '@templates/MainTemplate.vue'
import { useMasterInfoStore } from '@stores/MasterInfo'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { provide } from 'vue'

const route = useRoute()
const masterStore = useMasterInfoStore()

const token = ref<string>('')

onMounted(async () => {
  const tokenString = route.params.token as string
  token.value = tokenString || ''
  masterStore.setMasterToken(token.value)
  await masterStore.getMasterInfo(token.value)
})

const currencySign = computed(() => masterStore.masterData?.currencySign ?? '')
provide('currencySign', currencySign)
</script>

<template>
  <MainTemplate>
    <template v-if="masterStore.masterData">
      <MasterInfo :master-data="masterStore.masterData" />
      <MasterPortfolio :portfolios="masterStore.masterData.portfolios" />
      <MasterServices :master-activities="masterStore.masterData.masterActivities" />
      <ReviewsSection :reviews="masterStore.masterData.feedbacks" />
    </template>
  </MainTemplate>
</template>
