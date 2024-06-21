<script setup lang="ts">
import type { Props } from '@interfaces/SwiperSlideImageInterface'

defineProps<Props>()
</script>

<template>
  <figure
    class="ratio-1x1 rounded-3 swiper-slide portfolio-image swiper-slide-active"
    role="group"
    aria-label="1 / 8"
    style="width: 113.333px; margin-right: 8px"
  >
    <!--инлайн-->
    <img :src="portfolio.SignedUrl" alt="swiper slide image" />
  </figure>
</template>
