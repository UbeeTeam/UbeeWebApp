<script setup lang="ts">
import DownloadBannerBody from "@molecules/DownloadBannerBody.vue";
import CloseCircleButton from '@atoms/CloseCircleButton.vue';


const emits = defineEmits(['closeDownloadBanner']);

const closeDownloadBannerAndSetStorage = () => {
    sessionStorage.setItem('isUserCloseDownloadBanner', String(false));
    emits('closeDownloadBanner');
}
</script>

<template>
    <div class="container p-0 mt-3 banner-apps">
        <div class="d-flex justify-content-center align-items-center rounded-3 p-0 pe-5 shadow w-100">
            <CloseCircleButton @click="closeDownloadBannerAndSetStorage"/>
            <DownloadBannerBody/>
        </div>
    </div>
</template>