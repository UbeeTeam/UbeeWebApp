import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { mockData } from '@/mockData/mock'

export const useMasterInfoStore = defineStore('masterInfo', () => {
  const masterData = reactive(mockData)

  //Actions

  // const fetchMasterInfo = async () => {
  //   const res = await fetch('');
  // }

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

    getMasterRaiting,
    getMasterActivities
  }
})
