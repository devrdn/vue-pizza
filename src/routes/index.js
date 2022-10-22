import { createRouter, createWebHistory } from 'vue-router';

import PizzaHome from '@/pages/PizzaHome.vue';

const routes = [
  {
    path: '/',
    component: PizzaHome,
  },
  {
    path: '/pizza/:id',
    component: () => import('@/pages/PizzaPage.vue'),
  },
  {
    path: '/cart',
    component: () => import('@/pages/PizzaCart.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
