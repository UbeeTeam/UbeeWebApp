<script setup lang="ts">
import SwiperSlideImage from '@atoms/SwiperSlideImage.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { breakpoints, pagination } from '@/utils/swiperConstants'
import { Pagination } from 'swiper/modules'
import type { Props } from '@interfaces/MasterPortfolioInterface'
import 'swiper/css'
import 'swiper/css/pagination'

defineProps<Props>()
</script>

<template>
  <section class="portfolio rounded-4">
    <h2 class="m-0 mb-3 block-header">Пример работ</h2>
    <swiper
      :modules="[Pagination]"
      :breakpoints="breakpoints"
      :slides-per-view="1"
      :space-between="8"
      :pagination="pagination"
      style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms"
    >
      <swiper-slide v-for="portfolio in portfolios" :key="portfolio.Id">
        <SwiperSlideImage :key="portfolio.Id" :portfolio="portfolio" />
      </swiper-slide>
    </swiper>
    <div class="pagination swiper-pagination"></div>
  </section>
</template>
