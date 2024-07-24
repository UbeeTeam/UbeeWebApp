<script setup lang="ts">
import { MapboxMap } from 'vue-mapbox-ts'
import mapboxgl from 'mapbox-gl'
import type { Props } from '@/types/components/molecules/MasterLocationMapInterface'
import { useGlobalStore } from '@/stores/Global';
import { defineAsyncComponent, ref, shallowRef } from 'vue';
import MasterLocationMap from 'vue';
import LogoIcon from '../atoms/LogoIcon.vue';
import MasterMapForModal from '@molecules/MasterMapForModal.vue'

const props = defineProps<Props>()

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const globalStore = useGlobalStore();

const mapOptions = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0],
  zoom: 2
}

const createCustomFullscreenControl = (mapInstance: typeof MapboxMap) => {
  const button = document.createElement('button')
  button.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-fullscreen'
  button.type = 'button'
  button['aria-label'] = 'Toggle fullscreen'

  button.onclick = () => {
    console.log('вошел');
    
    const mapContainer = mapInstance.getContainer()
    if (!document.fullscreenElement) {
      if (mapContainer.requestFullscreen) {
        mapContainer.requestFullscreen() // все кроме айфона
      } else {
        globalStore.openModal({
        content: shallowRef(MasterMapForModal),
        contentProps: {
          avatarUrl: props.avatarUrl,
          coordinates: props.coordinates
        }
       }) // айфон
      }
    }
  }

  const control = {
    onAdd: () => {
      const container = document.createElement('div')
      container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group'
      container.appendChild(button)
      return container
    },
    onRemove: () => {
      button.parentNode?.removeChild(button)
    }
  }

  return control
}

const coordinates = props.coordinates
const zoomLevel = 14
const onMapLoad = (mapInstance: typeof MapboxMap) => {
  const el = document.createElement('div')
  el.className = 'marker'

  const img = document.createElement('img')
  img.src = props.avatarUrl
  el.appendChild(img)

  new mapboxgl.Marker(el).setLngLat(coordinates as [number, number]).addTo(mapInstance)

  mapInstance.flyTo({
    center: coordinates,
    zoom: zoomLevel
  })

  mapInstance.addControl(createCustomFullscreenControl(mapInstance))
}
</script>

<template>
  <MapboxMap :accessToken="accessToken" :mapOptions="mapOptions" @loaded="onMapLoad"></MapboxMap>
</template>

<style lang="scss">
.marker {
  width: 30px;
  height: 30px;
  border: 2px solid var(--ubee-primary-600);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.marker img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.mapboxgl-ctrl-fullscreen {
  background-image: url('/src/assets/svg/scope.svg'); // Укажите путь к иконке полноэкранного режима
  background-size: contain;
  width: 24px;
  height: 24px;
}
</style>
