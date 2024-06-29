import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { API_URL_MASTER } from '@/constants/api';
import axios from 'axios';
import { useGlobalStore } from '@/stores/Global';
import type { Master } from '@/types/api/Master';
import type { ServiceEvent } from '@/types/components/actions/services/ServiceEvent';
import { ServiceActions } from '@/types/components/actions/services/serviceActions';

export const useMasterInfoStore = defineStore('masterInfo', () => {
  const globalStore = useGlobalStore();

  const masterData = ref<Master>();
  const masterToken = ref<string>();

  const countServicesAddedToAppointment = ref<number>(0);
  const totalPriceOfServicesToAppointment = ref<number>(0);

  //Actions

  const getMasterInfo = async (token: string) => {
    try {
      const res = await axios.get(`${API_URL_MASTER}/GetByTokenAsync/${token}`);

      masterData.value = res.data;
      localStorage.setItem("masterToken", String(token));
    } catch (error) {
      console.error('Error fetching master data:', error);
    } finally {
      globalStore.finishInitializingLoader();
    }
  }

  const changeCountServicesAndTotalPriceAddedToAppointment = ({action, price}: ServiceEvent) => {
    switch (action) {
      case ServiceActions.ADD: {
        countServicesAddedToAppointment.value++;
        totalPriceOfServicesToAppointment.value += price;
        break;
      }
      case ServiceActions.DELETE: {
        countServicesAddedToAppointment.value = Math.max(0, countServicesAddedToAppointment.value - 1);
        totalPriceOfServicesToAppointment.value = Math.max(0, totalPriceOfServicesToAppointment.value - price);
        break;
      }
      default: {
        console.warn(`Unknown action: ${action}`);
      }
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
    masterToken,
    countServicesAddedToAppointment,
    totalPriceOfServicesToAppointment,

    getMasterInfo,
    changeCountServicesAndTotalPriceAddedToAppointment,

    getMasterRaiting,
    getMasterActivities
  }
})
