<template>
  <aside class="w-13 h-screen fixed top-0 left-10 flex flex-col items-center justify-between py-6 z-50">
    <!-- Topo com logo e menu -->
    <div class="bg-gray-100 flex flex-col items-center space-y-6">
      <img src="/icons/logo.png" alt="logo" class="w-12 h-12" />

      <!-- Ícones do menu -->
      <nav class="flex flex-col items-center space-y-6">
        <SidebarItem icon="/icons/home.svg" label="Home" />
        <SidebarItem icon="/icons/orders.svg" label="Ordens" />
        <SidebarItem icon="/icons/tools.svg" label="Serviços" />
        <SidebarItem icon="/icons/settings.svg" label="Configurações" />
      </nav>
    </div>

    <!-- Rodapé com botão de usuário -->
    <div class="relative mb-4">
      <button
        @click="mostrarMenuUsuario = !mostrarMenuUsuario"
        class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold hover:bg-orange-600 transition"
      >
        M
      </button>

      <!-- Popup de usuário -->
      <div
        v-if="mostrarMenuUsuario"
        class="absolute bottom-12 left-0 w-40 bg-white border rounded-lg shadow-lg z-50"
      >
        <ul class="py-2">
          <li>
            <button
              @click="abrirConfiguracoes"
              class="w-full text-left text-gray-00 px-2 py-2 hover:bg-gray-100"
            >
              ⚙️ Configurações
            </button>
          </li>
          <li>
            <button
              @click="logout"
              class="w-full text-left px-2 py-2 hover:bg-gray-100 text-red-600"
            >
              🚪 Sair
            </button>
          </li>
        </ul>
      </div>

      <!-- Copyright -->
      <div class="text-xs text-gray-300 mt-4 text-center">© 2025</div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

const mostrarMenuUsuario = ref(false)
const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/')
}

function abrirConfiguracoes() {
  alert('Configurações ainda não implementadas 😉')
}
</script>
