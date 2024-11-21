<script setup lang="ts">
import { useModalStore } from '@/stores/ModalAppointment'
import type { Props } from '@/types/components/molecules/AppointmentSuccesModalInterface'
import ModalTemplate from '@templates/ModalTemplate.vue'

const modalStore = useModalStore()

defineProps<Props>()
</script>

<template>
  <ModalTemplate :next-button-text="''" :title="'Заявка отправлена!'" :is-show-footer="false">
    <div class="rounded-2 p-3 appointment-modal__master-info">
      <p><strong>На всякий случай сохраните контакты и адрес мастера:</strong></p>
      <p>{{ masterAddressAndPhone.masterPhoneNumber }}</p>
      <p>{{ masterAddressAndPhone.masterAddress }}</p>
    </div>
    <p v-if="modalStore.errorMessage" style="color: red">{{ modalStore.errorMessage }}</p>
    <div class="d-flex justify-content-center align-items-center mt-3 appointment-modal__app">
      <figure class="d-block flex-shrink-0">
        <img src="/src/assets/images/illustration-master.png" alt="картинка мастера" />
      </figure>
      <div class="ms-3">
        <p>
          Управляй своими записями, находи других мастеров на карте города и получай уведомления в
          нашем мобильном приложении!
        </p>
        <div class="d-flex flex-wrap footer-apps">
          <a
            href="https://www.rustore.ru/catalog/app/ru.ubee"
            class="mt-2 me-2 footer-apps__rustore"
            ><img src="/src/assets/svg/rustore.svg" alt="Скачать Ubee в RuStore"
          /></a>
          <a
            href="https://play.google.com/store/apps/details?id=ru.ubee&pli=1"
            class="mt-2 me-2 footer-apps__googleplay"
            ><img src="/src/assets/svg/googleplay.svg" alt="Скачать Ubee в Google Play"
          /></a>
          <a
            href="https://apps.apple.com/ru/app/ubee-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81-%D0%B1%D1%8C%D1%8E%D1%82%D0%B8-%D1%83%D1%81%D0%BB%D1%83%D0%B3/id6612187282"
            class="mt-2 me-2 footer-apps__appstore"
            ><img src="/src/assets/svg/appstore.svg" alt="Скачать Ubee в AppStore"
          /></a>
        </div>
      </div>
    </div>
  </ModalTemplate>
</template>
