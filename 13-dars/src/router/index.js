import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/product/:id',
            name: 'product-details',
            component: () => import('../pages/ProductDetails.vue') // dynamic import or layz loading
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About.vue') // dynamic import or layz loading
        },
    ]
})

export default router