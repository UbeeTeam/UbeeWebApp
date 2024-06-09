<script setup lang="ts">
import MasterFeedbackBadgeUI from '@/components/UI/MasterFeedbackBadgeUI.vue';
</script>

<template>
    <section class="comments rounded-4">
        <h2 class="m-0 mb-3 block-header">Отзывы</h2>
        <MasterFeedbackBadgeUI :is-reviews-section-badge="true"/>
    </section>
</template>