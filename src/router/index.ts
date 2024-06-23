import { createRouter, createWebHistory } from 'vue-router';
import MasterProfileView from '@/views/MasterProfileView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:token',
      name: 'masterProfile',
      component: MasterProfileView,
      props: true,
      meta: {
        view: 'masterProfile',
      }
    },
    {
      path: '/master-form',
      name: 'masterForm',
      component: () => import('@/views/MasterFormView.vue'),
      meta: {
        view: 'masterFormView',
      }
    }
  ]
})

export default router
