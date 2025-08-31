import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import ListagemOS from '@/components/ListagemOS.vue'

import { useAuthStore } from '@/stores/auth'

const routes = [
    { path: '/', component: Login },
    { path: '/Dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/ordens', component: ListagemOS, meta: { requiresAuth: true } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()

    // Recupera token do localStorage se não estiver na store
    if (!auth.token) {
        const savedToken = localStorage.getItem('token')
        if (savedToken) {
            auth.token = savedToken
        }
    }

    if (to.meta.requiresAuth && !auth.token) {
        next('/')
    } else if (to.path === '/' && auth.token) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router
