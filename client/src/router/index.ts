import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/page/Home.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/life",
      name: "life",
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/food",
      name: "food",
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/trip",
      name: "trip",
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/culture",
      name: "culture",
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/tech",
      name: "tech",
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/biz",
      name: "biz",
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/issue",
      name: "issue",
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/entertainment",
      name: "entertainment",
      component: () => import("../components/page/Life.vue"),
    },
  ],
});

export default router;
