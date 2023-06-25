import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../layouts/MainPage.vue'),
    children: [
      {
        path: '/top',
        name: 'TOP',
        component: () => import('../views/Top.vue'),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
