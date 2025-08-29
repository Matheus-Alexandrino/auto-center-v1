<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="bg-gray-100 p-10 rounded-xl shadow-lg w-full max-w-md">
      
      <div class="flex justify-center mb-6">
        <img src="/icons/logo1.png" alt="Logo" class="w-34 h-24" />         
      </div>
      
      <div class="text-center mb-6">
        
      </div>

      <!-- Formulário -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Usuário </label>
          <input
            v-model="email"
            type="email"
            placeholder="Digite seu email"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <input
            v-model="password"
            type="password"
            placeholder="Digite sua senha"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-orange-500"
            required
          />
        </div>

        <div class="flex justify-end text-sm">
          <a href="#" class="text-xs text-orange-400 hover:underline">Recuperar senha?</a>
        </div>

        <button
          type="submit"
          class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          LOGIN
        </button>
      </form>
      <p v-if="auth.error" class="text-red-500 text-sm mt-4 text-center">
        {{ auth.error }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()

function handleLogin() {
  auth.login(email.value, password.value)
}

watch(() => auth.token, (token) => {
  if (token) {
    router.push('/dashboard')
  }
})
</script>
