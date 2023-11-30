import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import { adminRoutes } from "./admin";
import { notFoundRoutes } from "./notFound";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../layouts/LoginLayout.vue"),
    },
    adminRoutes,
    notFoundRoutes,
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

const token = localStorage.getItem("token");

router.beforeResolve((to, from, next) => {
  NProgress.start();
  next();
});

router.beforeEach((to, from, next) => {
  if (!token && to.name !== "login") {
    return next({ name: "login" });
  } else if (token && to.name === "login") {
    return next({ name: "admin-main" });
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
