import {createRouter, createWebHistory} from "vue-router";

import Community from "@/components/Community";
import Login from "@/components/Login";

const routes = [
    {
        path: '/community',
        name: 'community',
        component: Community
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})