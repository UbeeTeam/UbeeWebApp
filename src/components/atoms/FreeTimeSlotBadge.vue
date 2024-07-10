<script setup lang="ts">
import type { Props } from '@/types/components/atoms/FreeTimeSlotBadgeInterface';
import { ref } from 'vue';
import cuid from 'cuid';

const props = defineProps<Props>();
const emit = defineEmits(['checkTimeSlot']);

const isTimeSlotChecked = ref<boolean>(props.isSlotChecked);
const id = ref<string>(cuid());

const toggleCheckedTimeSlot = () => {    
    isTimeSlotChecked.value = !isTimeSlotChecked.value;

    if (isTimeSlotChecked) {
        emit('checkTimeSlot', props.time);
    }
}
</script>

<template>
    <li @click="toggleCheckedTimeSlot">
        <label for="" class="form-datetime__item">
            <input id="id" type="radio" name="time" :checked="isTimeSlotChecked" v-model="isTimeSlotChecked">
            <span :for="id" class="d-block px-3">{{ time }}</span>
        </label>
    </li>
</template>