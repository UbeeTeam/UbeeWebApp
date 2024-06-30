<script setup lang="ts">
import SwiperSlideImage from '@atoms/SwiperSlideImage.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { BREAKPOINTS, PAGINATION } from '@/constants/swiper';
import { Pagination } from 'swiper/modules';
import type { Props } from '@/types/components/organisms/MasterPortfolioInterface';
import VueEasyLightbox from 'vue-easy-lightbox';
import { ref, computed } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';


const props = defineProps<Props>();

const currentImageIndex = ref<number>(0);
const visible = ref(false);

const imageUrls = computed(() => props.portfolios.map(img => img.signedUrl));

const openGallery = (index: number) => {
  currentImageIndex.value = index;
  visible.value = true;
};
</script>

<template>
  <section class="portfolio rounded-4">
    <h2 class="m-0 mb-3 block-header">Пример работ</h2>
    <swiper
      :modules="[Pagination]"
      :breakpoints="BREAKPOINTS"
      :slides-per-view="1"
      :space-between="8"
      :pagination="PAGINATION"
    >
      <swiper-slide 
        v-for="(portfolio, index) in portfolios" 
        :key="portfolio.id"
        @click="openGallery(index)"
      >
        <SwiperSlideImage :portfolio="portfolio" />
      </swiper-slide>
    </swiper>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="imageUrls"
      :index="currentImageIndex"
      @hide="visible = false"
    />
    <div class="pagination swiper-pagination"></div>
  </section>
</template>
