import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../layouts/MainLayout.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import path from "path";

const routes = [
    {
        path: "/",
        component: MainLayout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                component: Home,
            },
            {
                path: "/about",
                component: About,
            },
        ],
    },

    // Add other routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
