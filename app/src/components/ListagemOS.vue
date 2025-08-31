<template>
  <div class="flex bg-gray-100 min-h-screen">
    <Sidebar />
    <div class="flex-1 ml-20">
      <!-- Header -->
      <div class="bg-white px-6 py-4 shadow-sm flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">
            Ordens de Serviço
          </h1>
          <p class="text-sm text-gray-500">Veja e gerencie todas as ordens cadastradas</p>
        </div>
        <div class="flex items-center space-x-4">
          <button
            @click="mostrarModal = true"
            class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            + Adicionar OS
          </button>
        </div>
      </div>

      <!-- Kanban -->
      <div class="px-6 mt-8 space-y-4">
        <div class="flex gap-4">
          <div
            v-for="(grupo, index) in gruposDeOrdens"
            :key="index"
            class="flex-1 p-2 rounded shadow-md"
            :class="{
              'bg-red-100': grupo.titulo === 'ATRASADO',
              'bg-yellow-100': grupo.titulo === 'DIAGNÓSTICO CHECKLIST',
              'bg-purple-100': grupo.titulo === 'PEÇAS TERCEIROS',
              'bg-blue-100': grupo.titulo === 'EXECUÇÃO',
              'bg-green-100': grupo.titulo === 'FINALIZADO'
            }"
          >
            <h3 class="text-sm font-semibold text-gray-700 text-center mb-2">{{ grupo.titulo }}</h3>

            <Draggable
              :list="grupo.ordens"
              :group="{ name: 'ordens', pull: true, put: true }"
              item-key="id"
              @end="atualizarStatus($event, grupo.titulo)"
            >
              <template #item="{ element }">
                <CardServico :dados="element" />
              </template>
            </Draggable>
          </div>
        </div>
      </div>

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
import Sidebar from './Sidebar.vue'
import CardServico from './CardServico.vue'
import ModalAdicionarOS from './ModalAdicionarOS.vue'
import { default as Draggable } from 'vuedraggable'

const mostrarModal = ref(false)

const gruposDeOrdens = ref([
  {
    titulo: 'ATRASADO',
    ordens: [
      {
        id: 1,
        cliente: 'João Silva',
        servico: 'Troca de Óleo',
        status: 'ATRASADO',
        data: '25/08/2025',
        hora: '09:00',
        marca: 'Fiat',
        modelo: 'Uno',
        cor: 'Prata',
        ano: '2018',
        placa: 'ABC-1234',
        km: '45.000',
        descricao: 'Troca de óleo e filtro'
      }
    ]
  },
  {
    titulo: 'DIAGNÓSTICO CHECKLIST',
    ordens: [
      {
        id: 2,
        cliente: 'Maria Santos',
        servico: 'Manutenção Preventiva',
        status: 'DIAGNÓSTICO CHECKLIST',
        data: '26/08/2025',
        hora: '10:30',
        marca: 'Volkswagen',
        modelo: 'Gol',
        cor: 'Branco',
        ano: '2020',
        placa: 'XYZ-5678',
        km: '30.200',
        descricao: 'Checklist completo'
      }
    ]
  },
  {
    titulo: 'PEÇAS TERCEIROS',
    ordens: [
      {
        id: 3,
        cliente: 'Carlos Oliveira',
        servico: 'Substituição de Peça',
        status: 'PEÇAS TERCEIROS',
        data: '27/08/2025',
        hora: '14:00',
        marca: 'Chevrolet',
        modelo: 'Onix',
        cor: 'Preto',
        ano: '2019',
        placa: 'DEF-9012',
        km: '60.000',
        descricao: 'Troca de amortecedor traseiro'
      }
    ]
  },
  {
    titulo: 'EXECUÇÃO',
    ordens: [
      {
        id: 4,
        cliente: 'Ana Costa',
        servico: 'Atualização de Software',
        status: 'EXECUÇÃO',
        data: '28/08/2025',
        hora: '11:15',
        marca: 'Renault',
        modelo: 'Sandero',
        cor: 'Vermelho',
        ano: '2021',
        placa: 'GHI-3456',
        km: '22.000',
        descricao: 'Atualização de sistema multimídia'
      }
    ]
  },
  {
    titulo: 'FINALIZADO',
    ordens: [
      {
        id: 5,
        cliente: 'Pedro Lima',
        servico: 'Limpeza de Sistema',
        status: 'FINALIZADO',
        data: '29/08/2025',
        hora: '16:45',
        marca: 'Honda',
        modelo: 'Civic',
        cor: 'Cinza',
        ano: '2017',
        placa: 'JKL-7890',
        km: '75.000',
        descricao: 'Limpeza de sistema de ar-condicionado'
      }
    ]
  }
])

function adicionarOS(novaOS) {
  const nova = {
    ...novaOS,
    id: Date.now(),
    status: 'EXECUÇÃO',
    data: new Date().toLocaleDateString('pt-BR'),
    hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }
  const execIndex = gruposDeOrdens.value.findIndex(g => g.titulo === 'EXECUÇÃO')
  gruposDeOrdens.value[execIndex].ordens.unshift(nova)
}


function atualizarStatus(event, novoTitulo) {
  const card = event.item?._underlying_vm_
  if (card && card.dados) {
    card.dados.status = novoTitulo
  }
}
</script>
