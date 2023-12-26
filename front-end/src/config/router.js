import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/login',
        component: import("@/auth/page/LoginPage.vue"),
    },
    {
        path: '/register',
        component: import("@/auth/page/RegisterPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
