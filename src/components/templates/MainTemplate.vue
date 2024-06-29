<script setup lang="ts">
import TheHeader from '@organisms/TheHeader.vue';
import TheFooter from '@organisms/TheFooter.vue';
import LoaderSpinner from '@molecules/LoaderSpinner.vue';
import { useGlobalStore } from '@stores/Global';
import DownloadBanner from '@organisms/DownloadBanner.vue';
import { ref, onMounted } from 'vue';

const globalStore = useGlobalStore();

onMounted(() => {
  checkStorageAndCloseDownloadBanner();
})

const showDownloadBanner = ref<boolean>(true);

const checkStorageAndCloseDownloadBanner = () => {
  if (localStorage.getItem('isUserCloseDownloadBanner')) {
    showDownloadBanner.value = false;
  }
}
</script>

<template>
    <div class="main-template">
        <DownloadBanner 
            v-if="showDownloadBanner" 
            @close-download-banner="showDownloadBanner = false"
        />
        <TheHeader/>
            <LoaderSpinner v-if="globalStore.initializing"/>
            <main v-else class="container p-0 main">
                <slot/>
            </main>
        <TheFooter/>
    </div>
</template>