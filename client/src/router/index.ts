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
      component: () => import("../components/page/Life.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/page/Login.vue"),
    },
  ],
});

export default router;
