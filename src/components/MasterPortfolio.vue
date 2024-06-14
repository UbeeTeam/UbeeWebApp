<script setup lang="ts">
import SwiperSlideImage from './SwiperSlideImage.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { breakpoints } from '@/utils/swiperBreakpoints'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const pagination = {
  clickable: true,
  el: '.pagination'
}
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
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
      <swiper-slide><SwiperSlideImage /></swiper-slide>
    </swiper>
    <div class="pagination swiper-pagination"></div>
  </section>
</template>
