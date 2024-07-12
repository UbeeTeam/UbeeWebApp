import type { ModalContentInfo} from "@/types/stores/Global";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore('globalStore', () => {
    const loading = ref(false);
    const initializing = ref(true);

    const isModalVisible = ref(false);
    const modalContentInfo = ref<ModalContentInfo | null>(null);

    // Action

    const openModal = (content: ModalContentInfo) => {
        modalContentInfo.value = content;
        isModalVisible.value = true;
    };

    const closeModal = () => {
        isModalVisible.value = false;
        modalContentInfo.value = null;
    };

    const toggleLoading = () => {
        loading.value = !loading.value;
    }

    const finishInitializingLoader = () => {
        initializing.value = false;
    }

    // Getters

    return {
        loading,
        initializing,
        isModalVisible,
        modalContentInfo,

        openModal,
        closeModal,
        finishInitializingLoader,
        toggleLoading,
    }
})