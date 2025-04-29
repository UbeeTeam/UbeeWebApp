<script setup lang="ts">
import AppointmentSection from '@organisms/AppointmentSection.vue'
import MainTemplate from '@templates/MainTemplate.vue'
import { useMasterInfoStore } from '@stores/MasterInfo'
import { computed, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'

const masterStore = useMasterInfoStore()
const router = useRouter()

onMounted(async () => {
  if (!masterStore.masterData) {
    const masterTokenFromStorage = masterStore.masterToken

    if (masterTokenFromStorage) {
      await masterStore.getMasterInfo(masterTokenFromStorage)
      return
    }
    router.push('/error')
  }
})

const currencySign = computed(() => masterStore.masterData?.currencySign ?? '')
provide('currencySign', currencySign)
</script>

<template>
  <MainTemplate>
    <AppointmentSection :master-data="masterStore.masterData" />
  </MainTemplate>
</template>
