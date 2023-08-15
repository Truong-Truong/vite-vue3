import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("../layouts/MainPage.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/components/Index.vue"),
      }
    ],
  },
  { path: '/:pathMatch(.*)*', component: () => import("@/components/Share/PageNotFound.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
