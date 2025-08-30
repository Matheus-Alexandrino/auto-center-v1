import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'
import { useAuthStore } from '@/stores/auth'

const routes = [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()

    if (to.meta.requiresAuth && !auth.token) {
        next('/')
    } else if (to.path === '/' && auth.token) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router
