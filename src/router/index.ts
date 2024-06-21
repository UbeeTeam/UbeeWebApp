import { createRouter, createWebHistory } from 'vue-router'
import MasterProfileView from '@/views/MasterProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'masterProfile',
      component: MasterProfileView
    },
    {
      path: '/master-form',
      name: 'form',
      component: () => import('@/views/MasterFormView.vue')
    }
  ]
})

export default router
