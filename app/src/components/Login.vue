<template>
      
    <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
      <div class="w-full max-w-sm">
      <div class="flex justify-center mb-6">
        <p class="text-black justify-center">Entrar:</p>
      </div>
      
      <button
        class="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 mb-3 bg-white text-black hover:bg-yellow-50"
      >
        <span class="mr-2">
          <img src="/public/icons/google-logo.svg" alt="" class="w-6 h-6" />
        </span> Continue com Google
      </button>
      <button
        class="w-full flex items-center justify-center border border-gray-300 rounded-full py-2 bg-white text-black hover:bg-yellow-50"
      >
        <span class="mr-2">
          <img src="/public/icons/apple-logo.svg" alt="" class="w-6 h-6" />
        </span> Entrar com Apple
      </button>
      
      <div class="flex items-center my-4">
        <hr class="flex-grow border-gray-300" />
        <span class="mx-2 text-gray-500">ou</span>
        <hr class="flex-grow border-gray-300" />
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-3">
        <div>
          <label class=" text-sm font-medium text-gray-700 mb-1" aria-hidden="true">
          E-mail ou telefone
          </label>
          <label aria-hidden="true" class="block text-sm font-medium text-gray-700 mb-1"></label>
          <input
            v-model="email"
            type="email"
            placeholder=""
            class="w-full px-4 py-2 border  text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <div class="flex">
            <input
              v-model="password"
              type="password"
              placeholder=""
              class="flex-grow px-4 py-2 border  text-gray-700 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-yellow-50"
              required
            />
  
          </div>
        </div>

        <div class="flex justify-start">
          <a href="#" class="text-orange-500 text-sm hover:underline">Esqueceu a senha?</a>
        </div>

        <div class="flex items-center space-x-2">
          <input type="checkbox" id="keepLogged" class="accent-orange-500" />
          <label for="keepLogged" class="text-sm text-gray-700">Me mantenha na conta</label>
        </div>

        <button
          type="submit"
          class="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition text-base font-semibold"
        >
          Entrar
        </button>
      </form>
      
      <p class="text-center text-sm text-gray-600 mt-4">
        Ainda não faz parte? <a href="#" class="text-orange-500 font-semibold hover:underline">Cadastre-se agora</a>
      </p>

      <p v-if="auth.error" class="text-red-500 text-xs sm:text-sm mt-4 text-center">
        {{ auth.error }}
      </p>
    </div>
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