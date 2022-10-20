import { createRouter, createWebHistory } from 'vue-router';

import PizzaHome from '@/pages/PizzaHome.vue';
import PizzaCart from '@/pages/PizzaCart.vue';

const routes = [
  {
    path: '/',
    component: PizzaHome,
  },
  {
    path: '/pizza/:id',
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
