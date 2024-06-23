import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { API_URL_MASTER } from '@/constants/api';
import axios from 'axios';
import { useGlobalStore } from '@/stores/Global';
import type { Master } from '@/types/api/Master';

export const useMasterInfoStore = defineStore('masterInfo', () => {
  const globalStore = useGlobalStore();

  const masterData = ref<Master>();

  //Actions

  const getMasterInfo = async (token: string) => {
    try {
      const res = await axios.get(`${API_URL_MASTER}/GetMasterByTokenAsync/${token}`);
      
      masterData.value = res.data;
    } catch (error) {
      console.error('Error fetching master data:', error);
    } finally {
      globalStore.finishInitializingLoader();
    }
  }

  //Getters

  const getMasterRaiting = computed<{rating:number, feedBackCount: number}>(() => {
    return {
      rating: masterData.value?.rating ?? 0,
      feedBackCount: masterData.value?.feedBackCount ?? 0,
    }
  })

  const getMasterActivities = computed(() => {
    return masterData.value?.masterActivities;
  })

  return { 
    masterData,

    getMasterInfo,

    getMasterRaiting,
    getMasterActivities
  }
})
