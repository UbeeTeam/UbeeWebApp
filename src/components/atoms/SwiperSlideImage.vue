<script setup lang="ts">
import type { Props } from '@/types/components/atoms/SwiperSlideImageInterface';

defineProps<Props>();
</script>

<template>
  <a
    class="ratio-1x1 rounded-2 swiper-slide portfolio-image swiper-slide-active"
    role="group"
    aria-label="1 / 8"
    style="width: 101px; margin-right: 4px;"
  >
    <img :src="portfolio.signedUrl" alt="swiper slide image" />
</a>
</template>
