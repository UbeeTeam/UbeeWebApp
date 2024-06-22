import { computed, reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import { mockData } from '@/mockData/mock';
import { API_URL_MASTER } from '@/constants/api';
import axios from 'axios';
import { useGlobalStore } from '@stores/Global';

export const useMasterInfoStore = defineStore('masterInfo', () => {
  const globalStore = useGlobalStore();

  const masterData = reactive(mockData)
  const loading = ref(false);

  //Actions

  const getMasterInfo = async () => {
    const res = await axios.get(`${API_URL_MASTER}/GetMasterByTokenAsync/`);
  }

  //Getters

  const getMasterRaiting = computed<{rating:number, feedBackCount: number}>(() => {
    return {
      rating: masterData.master.Rating,
      feedBackCount: masterData.master.FeedBackCount,
    }
  })

  const getMasterActivities = computed(() => {
    return masterData.master.MasterActivities;
  })

  return { 
    masterData,
    loading,

    getMasterInfo,

    getMasterRaiting,
    getMasterActivities
  }
})
