<script setup lang="ts">
import ButtonPrimary from '@atoms/ButtonPrimary.vue'

const redirectToDownloadMobileApp = () => {
  const userAgent = navigator.userAgent

  if (/android/i.test(userAgent)) {
    window.location.href = 'https://play.google.com/store/apps/details?id=ru.ubee&pli=1'
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.location.href =
      'https://apps.apple.com/ru/app/ubee-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81-%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D1%83%D1%81%D0%BB%D1%83%D0%B3/id6612187282'
  } else {
    window.location.href = 'https://www.rustore.ru/catalog/app/ru.ubee'
  }
}
</script>

<template>
  <div class="p-3 w-100">
    <p class="m-0 mb-3">
      Управляй своими записями, находи других мастеров на карте города и получай уведомления в нашем
      мобильном приложении!
    </p>
    <div>
      <ButtonPrimary
        @click="redirectToDownloadMobileApp"
        :buttonText="`Скачать!`"
        :classes="'btn-primary'"
      />
    </div>
  </div>
</template>
