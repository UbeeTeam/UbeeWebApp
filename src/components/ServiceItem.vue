<script setup lang="ts"></script>

<template>
  <div class="accordion-item service">
    <h2 class="accordion-header service-header">
      <button
        class="d-flex flex-column justify-content-start align-items-start pe-4 accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#service1"
        aria-expanded="false"
        aria-controls="service1"
      >
        <strong>Наращивание ресниц</strong>
        <span class="mt-1">Опыт работы&nbsp;— 5 лет</span>
      </button>
    </h2>
    <div id="service1" class="accordion-collapse collapse">
      <div class="accordion-body service-content">
        <ul class="m-0 p-0 service-items">
          <li class="d-flex service-item">
            <span class="w-100">Наращивание ресниц</span>
            <strong class="flex-shrink-0">2 000 ₽</strong>
          </li>
          <li class="d-flex service-item">
            <span class="w-100">Двойной объём / 2D</span>
            <strong class="flex-shrink-0">2 500 ₽</strong>
          </li>
          <li class="d-flex service-item">
            <span class="w-100">Тройной объём / 3D</span>
            <strong class="flex-shrink-0">3 500 ₽</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
