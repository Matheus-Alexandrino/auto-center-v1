<template>
  <div class="flex bg-gray-100 min-h-screen">
    <!-- Sidebar fixo -->
    <Sidebar />

    <!-- Conteúdo principal -->
    <div class="flex-1 ml-20">
      <!-- Header -->
      <div class="bg-white px-6 py-4 shadow-sm flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">
            Olá, <span class="text-orange-500">Matheus!</span> 👋
          </h1>
          <p class="text-sm text-gray-500">Aqui está o resumo da sua oficina hoje</p>
        </div>
        <button @click="mostrarModal = true" class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
          + Adicionar OS
        </button>
      </div>

      <!-- Cards de resumo -->
      <ResumoFinanceiro />

      <!-- Seção de ordens -->
      <div class="px-6 mt-8 space-y-4">
        <h2 class="text-lg font-bold text-gray-700">Ordens de Serviço</h2>

        <!-- Categorias -->
        <div class="grid grid-cols-5 gap-4">
          <div v-for="(grupo, index) in gruposDeOrdens" :key="index" class="space-y-4">
            <h3 class="text-sm font-semibold text-gray-500 text-center">{{ grupo.titulo }}</h3>
            <CardServico v-for="os in grupo.ordens" :key="os.id" :dados="os" />
          </div>
        </div>
      </div>

      <!-- Modal -->
      <ModalAdicionarOS
        :visivel="mostrarModal"
        @fechar="mostrarModal = false"
        @salvar="adicionarOS"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import ResumoFinanceiro from './components/ResumoFinanceiro.vue'
import CardServico from './components/CardServico.vue'
import ModalAdicionarOS from './components/ModalAdicionarOS.vue'

const mostrarModal = ref(false)

const gruposDeOrdens = ref([
  {
    titulo: 'ATRASADO',
    ordens: [
      {
        id: 1,
        status: 'ATRASADO',
        codigo: 'ABCD134',
        modelo: 'Golf Preto',
        cliente: 'Rafael Carvalho dos Santos',
        data: '30/07/2023'
      }
    ]
  },
  {
    titulo: 'DIAGNÓSTICO CHECKLIST',
    ordens: [
      {
        id: 2,
        status: 'EM ANDAMENTO',
        codigo: 'XYZ789',
        modelo: 'Civic Prata',
        cliente: 'João Silva',
        data: '28/07/2023'
      }
    ]
  },
  {
    titulo: 'PEÇAS TERCEIROS',
    ordens: [
      {
        id: 3,
        status: 'FINALIZADO',
        codigo: 'LMN456',
        modelo: 'Corolla Branco',
        cliente: 'Ana Souza',
        data: '25/07/2023'
      }
    ]
  },
  {
    titulo: 'EXECUÇÃO',
    ordens: [
      {
        id: 4,
        status: 'EM ANDAMENTO',
        codigo: 'DEF321',
        modelo: 'Fiesta Azul',
        cliente: 'Carlos Mendes',
        data: '29/07/2023'
      }
    ]
  },
  {
    titulo: 'FINALIZADO',
    ordens: [
      {
        id: 5,
        status: 'FINALIZADO',
        codigo: 'GHI654',
        modelo: 'Onix Branco',
        cliente: 'Fernanda Lima',
        data: '27/07/2023'
      }
    ]
  }
])

function adicionarOS(novaOS) {
  const nova = {
    ...novaOS,
    id: Date.now(),
    status: 'EM ANDAMENTO',
    data: new Date().toLocaleDateString('pt-BR')
  }

  // Adiciona na primeira categoria por padrão
  gruposDeOrdens.value[0].ordens.unshift(nova)
}
</script>