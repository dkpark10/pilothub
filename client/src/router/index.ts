import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import HomeView from "../components/page/Home.vue";

export default () => {
  const isSsrMode = typeof window === "undefined";
  const createHistory = isSsrMode ? createMemoryHistory : createWebHistory;

  return createRouter({
    history: createHistory(process.env.BASE_URL),
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
};
