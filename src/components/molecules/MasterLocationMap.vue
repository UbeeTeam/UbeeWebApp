<script setup lang="ts">
import { MapboxMap } from 'vue-mapbox-ts'
import mapboxgl from 'mapbox-gl'
import type { Props } from '@/types/components/molecules/MasterLocationMapInterface'

const props = defineProps<Props>()

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const mapOptions = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0],
  zoom: 2
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

  mapInstance.addControl(new mapboxgl.FullscreenControl())
}
</script>

<template>
  <MapboxMap :accessToken="accessToken" :mapOptions="mapOptions" @loaded="onMapLoad"> </MapboxMap>
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
</style>
