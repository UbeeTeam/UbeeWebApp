<script setup lang="ts">
import TheHeader from '@organisms/TheHeader.vue';
import TheFooter from '@organisms/TheFooter.vue';
</script>

<template>
    <div class="not-found-page-template">
        <TheHeader/>
            <main class="container p-0 main">
                <slot></slot>
            </main>
        <TheFooter/>
    </div>
</template>