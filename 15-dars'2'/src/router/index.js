import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

const authRequiredRoutes = ['Home'];

function authGuard(to, from, next) {
    const routeName = to.name;

    if (authRequiredRoutes.includes(routeName)) {
        const isAuthenticated = true;

        if (!isAuthenticated) {
            // router.push({ name: 'login' });
            next({ name: 'login' });
            // next({ path: '/login' });
        } else {
            next();
        }
    }
    else {
        next();
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: authGuard,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter() {
                localStorage.removeItem('token')
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About.vue'),
            beforeEnter: authGuard,
        },
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (!token && to.name !== 'login' && to.meta.requiresAuth) {
        next({ name: 'login' })
    }
    else if (token && to.name == 'login') {
        next({ name: from.name })
    }
    else {
        next()
    }
})

export default router;