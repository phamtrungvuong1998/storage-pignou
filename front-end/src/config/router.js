import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: '/',
      redirect: '/login',
    },
    {
        path: '/login',
        component: import("@/auth/page/LoginPage.vue"),
        name: "login",
    },
    {
        path: '/register',
        component: import("@/auth/page/RegisterPage.vue"),
    },
    {
        path: '/reset-password',
        component: import("@/auth/page/ResetPassword.vue"),
    },
    {
        path: '/forgot-password',
        component: import("@/auth/page/ForGotPassword.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
