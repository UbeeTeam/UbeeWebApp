<script setup lang="ts">
import TheHeader from '@organisms/TheHeader.vue';
import TheFooter from '@organisms/TheFooter.vue';
import LoaderSpinner from '@molecules/LoaderSpinner.vue';
import { useGlobalStore } from '@stores/Global';
import DownloadBanner from '@organisms/DownloadBanner.vue';
import UniversalModalWindow from '@organisms/UniversalModalWindow.vue';
import { ref, onMounted } from 'vue';
import LogoIcon from '@atoms/LogoIcon.vue'

const globalStore = useGlobalStore();

onMounted(() => {
  checkStorageAndCloseDownloadBanner();
})

const showDownloadBanner = ref<boolean>(true);

const checkStorageAndCloseDownloadBanner = () => {
  if (sessionStorage.getItem('isUserCloseDownloadBanner')) {
    showDownloadBanner.value = false;
  }
}
</script>

<template>
    <div class="main-template container">
        <DownloadBanner 
            v-if="showDownloadBanner" 
            @close-download-banner="showDownloadBanner = false"
        />
        <LoaderSpinner
          v-if="globalStore.loading" 
          :is-modal="globalStore.loading"
        />
        <UniversalModalWindow/>
        <TheHeader/>
            <LoaderSpinner 
              v-if="globalStore.initializing" 
              :is-modal="false"
            />
            <main v-else class="container p-0 main">
                <slot/>
            </main>
        <LogoIcon/>
        <TheFooter/>
    </div>
</template>