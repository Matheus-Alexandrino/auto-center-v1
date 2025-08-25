<template>
  <div v-if="visivel" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Nova Ordem de Serviço</h2>

      <form @submit.prevent="salvar">
        <div class="space-y-4">
          <input v-model="os.cliente" type="text" placeholder="Nome do cliente" class="w-full border rounded px-3 py-2" />
          <input v-model="os.modelo" type="text" placeholder="Modelo do veículo" class="w-full border rounded px-3 py-2" />
          <input v-model="os.codigo" type="text" placeholder="Código da OS" class="w-full border rounded px-3 py-2" />
        </div>

        <div class="flex justify-end mt-6 space-x-2">
          <button type="button" @click="fechar" class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancelar</button>
          <button type="submit" class="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({ visivel: Boolean })
const emit = defineEmits(['fechar', 'salvar'])

const os = ref({
  cliente: '',
  modelo: '',
  codigo: ''
})

function fechar() {
  emit('fechar')
}

function salvar() {
  emit('salvar', os.value)
  fechar()
}
</script>