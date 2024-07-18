<script setup lang="ts">
import ButtonPrimary from '@atoms/ButtonPrimary.vue';

const redirectToDownloadMobileApp = () => {
    const platform = navigator.platform.toLowerCase();

    if (platform.includes('android')) {
        window.location.href = 'https://play.google.com/store/apps/details?id=ru.ubee&pli=1';
    }
    if (platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod')) {
        window.location.href = 'ссылка на App Store';
    } else {
        window.location.href = 'https://www.rustore.ru/catalog/app/ru.ubee';
    }
}
</script>

<template>
    <div class="p-3 w-100">
        <p class="m-0 mb-3">Управляй своими записями, находи других мастеров на карте города и получай уведомления в нашем мобильном приложении!</p>
        <div>
            <ButtonPrimary
                @click="redirectToDownloadMobileApp"
                :buttonText="`Скачать!`"
                :classes="'btn-primary'"
            />
        </div>
    </div>
</template>