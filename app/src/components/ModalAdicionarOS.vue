<template>
  <div v-if="visivel" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md overflow-y-auto max-h-screen">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Nova Ordem de Serviço</h2>

      <form @submit.prevent="salvar">
        <div class="space-y-4">
          <input v-model="os.cliente" type="text" placeholder="Nome do cliente" class="w-full border rounded px-3 py-2" />
          <input v-model="os.servico" type="text" placeholder="Serviço a ser realizado" class="w-full border rounded px-3 py-2" />
          <input v-model="os.modelo" type="text" placeholder="Modelo do veículo" class="w-full border rounded px-3 py-2" /> -->
          <input v-model="os.marca" type="text" placeholder="Marca do veículo" class="w-full border rounded px-3 py-2" />
           <!-- <select v-model="marcaSelecionada" class="w-full border rounded px-3 py-2">
            <option value="" disabled selected>Selecione a marca</option>
            <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
              {{ marca.name }}
            </option>
          </select>

          <select v-model="modeloSelecionado" class="w-full border rounded px-3 py-2" :disabled="!marcaSelecionada">
            <option value="" disabled selected>Selecione o modelo</option>
            <option v-for="modelo in modelos" :key="modelo.id_modelo" :value="modelo.name">
              {{ modelo.name }}
            </option>
          </select> -->

          <input v-model="os.cor" type="text" placeholder="Cor do veículo" class="w-full border rounded px-3 py-2" />
          <input v-model="os.ano" type="text" placeholder="Ano do veículo" class="w-full border rounded px-3 py-2" />
          <input v-model="os.placa" type="text" placeholder="Placa do veículo" class="w-full border rounded px-3 py-2" />
          <input v-model="os.km" type="text" placeholder="Quilometragem" class="w-full border rounded px-3 py-2" />          
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
import { ref, onMounted, watch } from 'vue'

const marcas = ref([])
const modelos = ref([])
const marcaSelecionada = ref('')
const modeloSelecionado = ref('')
const props = defineProps({ visivel: Boolean })
const emit = defineEmits(['fechar', 'salvar'])

const os = ref({
  cliente: '',
  servico: '',
  modelo: '',
  marca: '',
  cor: '',
  ano: '',
  placa: '',
  km: '',
  descricao: ''
})

function fechar() {
  emit('fechar')
}

onMounted(() => {
  fetch('https://fipeapi.com.br/api/1/carros/marcas.json')
    .then(res => res.json())
    .then(data => {
      marcas.value = marca
    })
})

watch(marcaSelecionada, (novaMarcaId) => {
  if (novaMarcaId) {
    fetch(`https://fipeapi.com.br/api/1/carros/veiculos/${novaMarcaId}.json`)
      .then(res => res.json())
      .then(data => {
        modelos.value = data
      })
  }
})

function salvar() {
  // if (!os.value.cliente || !modeloSelecionado.value || !marcaSelecionada.value) {
  //   alert('Preencha os campos obrigatórios: cliente, marca e modelo.')
  //   return
  // }
  // os.value.marca = marcas.value.find(m => m.id === marcaSelecionada.value)?.name || ''
  // os.value.modelo = modeloSelecionado.value
  emit('salvar', os.value)
  fechar()
}



</script>
