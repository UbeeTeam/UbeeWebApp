import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore('globalStore', () => {
    const loading = ref(false);
    const initializing = ref(true);

    const toggleLoading = () => {
        loading.value = !loading.value;
    }

    const finishInitializingLoader = () => {
        initializing.value = false;
    }

    return {
        loading,
        initializing,

        finishInitializingLoader,
        toggleLoading,
    }
})