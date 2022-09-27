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
    // {
    //   path: "/life",
    //   name: "life",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/food",
    //   name: "food",
    //   component: () => import("../components/page/Food.vue"),
    // },
    // {
    //   path: "/trip",
    //   name: "trip",
    //   component: () => import("../components/page/Trip.vue"),
    // },
    // {
    //   path: "/culture",
    //   name: "culture",
    //   component: () => import("../components/page/Culture.vue"),
    // },
    // {
    //   path: "/tech",
    //   name: "tech",
    //   component: () => import("../components/page/Tech.vue"),
    // },
    // {
    //   path: "/biz",
    //   name: "biz",
    //   component: () => import("../components/page/Biz.vue"),
    // },
    // {
    //   path: "/issue",
    //   name: "issue",
    //   component: () => import("../components/page/Issue.vue"),
    // },
    // {
    //   path: "/entertainment",
    //   name: "entertainment",
    //   component: () => import("../components/page/Entertainment.vue"),
    // },
    // {
    //   path: "/ranking",
    //   name: "ranking",
    //   component: () => import("../components/page/Ranking.vue"),
    // },
    // {
    //   path: "/life",
    //   name: "life",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/food",
    //   name: "food",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/trip",
    //   name: "trip",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/culture",
    //   name: "culture",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/tech",
    //   name: "tech",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/biz",
    //   name: "biz",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/issue",
    //   name: "issue",
    //   component: () => import("../components/page/Life.vue"),
    // },
    // {
    //   path: "/entertainment",
    //   name: "entertainment",
    //   component: () => import("../components/page/Life.vue"),
    // },
    {
      path: "/:category",
      name: "category",
      component: () => import("../components/page/Life.vue"),
    },
  ],
});

export default router;
