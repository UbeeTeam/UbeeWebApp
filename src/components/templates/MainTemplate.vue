<script setup lang="ts">
import TheHeader from '@organisms/TheHeader.vue';
import TheFooter from '@organisms/TheFooter.vue';
import LoaderSpinner from '@molecules/LoaderSpinner.vue';
import { useGlobalStore } from '@stores/Global';

const globalStore = useGlobalStore();
</script>

<template>
    <div class="main-template">
        <slot name="banner-slot"></slot>
        <TheHeader/>
            <LoaderSpinner v-if="globalStore.initializing"/>
            <main v-else class="container p-0 main">
                <slot/>
            </main>
        <TheFooter/>
    </div>
</template>