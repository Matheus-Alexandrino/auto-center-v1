import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        error: null
    }),
    actions: {
        login(email, password) {
            if (email === 'teste@teste.com' && password === '123456') {
                this.token = 'fake-token'
                this.user = { email }
                localStorage.setItem('token', this.token)
                localStorage.setItem('user', JSON.stringify(this.user))
                this.error = null
            } else {
                this.error = 'Credenciais inválidas'
            }
        },
        logout() {
            this.token = null
            this.user = null
            localStorage.clear()
        }
    }
})
