import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MasterFormView from '@/views/MasterFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/master-form',
      name: 'form',
      component: () => import('@/views/MasterFormView.vue')
    }
  ]
})

export default router
