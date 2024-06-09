<script setup lang="ts">
import ServiceItem from '@/components/ServiceItem.vue'
</script>

<template>
  <section class="services">
    <h2 class="m-0 mb-3 block-header">Услгуи</h2>
    <div class="accordion rounded-4">
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
    </div>
  </section>
</template>
