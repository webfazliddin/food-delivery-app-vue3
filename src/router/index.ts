// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: () => import("@/pages/HomePage.vue"),
        },
      ],
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "login",
          component: () => import("@/pages/Auth/LoginPage.vue"),
        },
        {
          path: "sign-up",
          component: () => import("@/pages/Auth/SignUpPage.vue"),
        },
        {
          path: "forgot-password",
          component: () => import("@/pages/Auth/ForgotPasswordPage.vue"),
        },
      ],
    },
  ],
});

export default router;
