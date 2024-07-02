<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/Global';

const globalStore = useGlobalStore();

const visible = computed(() => globalStore.isModalVisible);
const modalContentInfo = computed(() => globalStore.modalContentInfo);

const modalContentComponentProps = computed(() => modalContentInfo.value?.contentProps || {});
const modalTemplateComponentProps = computed(() => modalContentInfo.value?.templateProps || {});
</script>

<template>
    <div v-if="visible" class="modal modal-overlay" @click.self="globalStore.closeModal">
        <div class="" v-if="modalContentInfo?.template">
            <div class="modal-content modal-dialog">
                <component :is="modalContentInfo.template" v-bind="modalTemplateComponentProps">
                    <component :is="modalContentInfo.content" v-bind="modalContentComponentProps"/>
                </component>
            </div>
        </div>
        <div class="" v-else>
            <div class="modal-content">
                <component :is="modalContentInfo" v-bind="modalContentComponentProps"/>
            </div>
        </div>
  </div>
</template>

<style scoped>
.modal-overlay {
    z-index: 999;
    min-width: 560px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    border-radius: 5px;
    min-width: 500px;
}
</style>