<script setup lang="ts">
import ButtonPrimary from '@atoms/ButtonPrimary.vue';

const redirectToDownloadMobileApp = () => {
    const userAgent = navigator.userAgent;

    if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=ru.ubee&pli=1';
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        alert('Приложение ubee скоро будет в AppStore!')
        // window.location.href = 'https://apps.apple.com/ru/app/id123456789';
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
