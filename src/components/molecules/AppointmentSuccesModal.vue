<script setup lang="ts">
import type { Props } from '@/types/components/molecules/AppointmentSuccesModalInterface';
import ModalTemplate from '@templates/ModalTemplate.vue';


defineProps<Props>();

</script>

<template>
<ModalTemplate :next-button-text="''" :title="'Заявка отправлена!'" :is-show-footer="false">
    <div class="rounded-2 p-3 appointment-modal__master-info">
        <p><strong>На всякий случай сохраните контакты и адрес мастера:</strong></p>
        <p>{{masterAddressAndPhone.masterPhoneNumber}}</p>
        <p>{{ masterAddressAndPhone.masterAddress }}</p>
    </div>    
    <div class="d-flex justify-content-center align-items-center mt-3 appointment-modal__app">
        <figure class="d-block flex-shrink-0">
            <img src="/src/assets/images/illustration-master.png" alt="картинка мастера">
        </figure>
        <div class="ms-3">
            <p>Управляй своими записями, находи других мастеров на карте города и получай уведомления в нашем мобильном приложении!</p>
            <div class="d-flex flex-wrap footer-apps">
                <a href="#" class="mt-2 me-2 footer-apps__rustore"><img src="/src/assets/svg/rustore.svg" alt="Скачать Ubee в RuStore"></a>
                <a href="#" class="mt-2 me-2 footer-apps__googleplay"><img src="/src/assets/svg/googleplay.svg" alt="Скачать Ubee в Google Play"></a>
                <a href="#" class="mt-2 me-2 footer-apps__appstore" data-soon="Скоро"><img src="/src/assets/svg/appstore.svg" alt="Скачать Ubee в AppStore"></a>
            </div>
        </div>
    </div>
</ModalTemplate>
</template>