<script setup lang="ts">
import SwiperSlideImage from '@atoms/SwiperSlideImage.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { BREAKPOINTS, PAGINATION } from '@/constants/swiper'
import { Pagination } from 'swiper/modules'
import type { Props } from '@/types/components/organisms/MasterPortfolioInterface'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps<Props>()
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
      style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms"
    >
      <swiper-slide v-for="portfolio in portfolios" :key="portfolio.id">
        <SwiperSlideImage :key="portfolio.id" :portfolio="portfolio" />
      </swiper-slide>
    </swiper>
    <div class="pagination swiper-pagination"></div>
  </section>
</template>
