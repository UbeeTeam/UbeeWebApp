<script setup lang="ts">
import type { Props } from '@/types/components/atoms/ServiceOptionInterface';

defineProps<Props>();

</script>

<template>
    <li :key="service.id" class="d-flex service-item">
        <strong class="flex-shrink-0 service-item__title">
            {{ service.serviceName }}
            <span class="mt-1">
                {{ service.duration }} минут
            </span>
        </strong>
        <strong class="flex-shrink-0 service-item__price">{{ service.cost }} ₽</strong>
    </li>
</template>