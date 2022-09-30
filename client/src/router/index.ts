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
      path: "/:category",
      name: "category",
      component: () => import("../components/page/Hub.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/page/Login.vue"),
    },
    {
      path: "/post/:id",
      name: "post-detail",
      component: () => import("../components/page/PostDetail.vue"),
    },
    {
      path: "/recent",
      name: "recent-read-posts",
      component: () => import("../components/page/RecentReadPost.vue"),
    },
  ],
});

export default router;
