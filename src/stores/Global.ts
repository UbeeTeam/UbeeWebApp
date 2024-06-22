import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore('globalStore', () => {
    const loading = ref(false);

    return {
        loading,
    }
})