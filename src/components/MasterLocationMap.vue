<script setup lang="ts">
import { MapboxMap } from 'vue-mapbox-ts';
import mapboxgl from 'mapbox-gl';

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const mapOptions = {
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0], // Начальные координаты центра карты
  zoom: 2, // Начальный зум карты
};

const coordinates = [12.4924, 41.8902]; // Координаты маркера (например, Колизей в Риме)
const zoomLevel = 14; // Уровень зума для маркера

const onMapLoad = (mapInstance :typeof MapboxMap) => {
  const el = document.createElement('div');
  el.className = 'marker';

  const img = document.createElement('img');
  img.src = 'https://placekitten.com/50/50';
  el.appendChild(img);

  new mapboxgl.Marker(el)
    .setLngLat(coordinates as [number, number])
    .addTo(mapInstance);

  mapInstance.flyTo({
    center: coordinates,
    zoom: zoomLevel,
  });

};
</script>

<template>
    <MapboxMap 
        :accessToken="accessToken"
        :mapOptions="mapOptions"
        @loaded="onMapLoad"
    >  
    </MapboxMap>
</template>

<style lang="scss">
.marker {
  width: 30px;
  height: 30px;
  border: 2px solid purple;
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