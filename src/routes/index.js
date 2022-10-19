import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
  },
  {
    path: '/pizza/:id',
  },
  {
    path: '/cart',
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
