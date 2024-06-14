import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { mockData } from '@/mockData/mock';

export const useMasterInfoStore = defineStore('masterInfo', () => {

  const masterData = reactive(mockData);

  // const fetchMasterInfo = async () => {
  //   const res = await fetch('');
  // }

  return { masterData }
})
