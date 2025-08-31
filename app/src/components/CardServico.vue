<template>
  <div class="bg-white rounded-xl shadow-md p-4 space-y-2 hover:shadow-lg transition">    
    <span
      class="text-xs font-semibold px-2 py-1 rounded-full"
      :class="{
        'bg-red-400 text-red-600': dados.status === 'ATRASADO',
        'bg-yellow-400 text-yellow-600': dados.status === 'DIAGNÓSTICO CHECKLIST' || dados.status === 'EM ANDAMENTO',
        'bg-orange-400 text-purple-600': dados.status === 'PEÇAS TERCEIROS',
        'bg-blue-400 text-blue-600': dados.status === 'EXECUÇÃO',
        'bg-green-400 text-green-600': dados.status === 'FINALIZADO'
      }"
    >
      {{ dados.status }}
    </span>

    <!-- Modelo, Cor, Placa -->
    <h3 class="font-bold text-blue-700 text-lg">
      {{ dados.modelo }} - {{ dados.cor }}  {{ dados.placa }}
    </h3>

    <!-- Marca, Ano, KM -->
    <p class="text-sm text-gray-600">
      Marca: {{ dados.marca }} <br> Ano: {{ dados.ano }} <br> KM: {{ dados.km }}
    </p>

    <!-- Serviço e Descrição -->
    <p class="text-sm text-gray-600">
      Serviço: {{ dados.servico }}
    </p>  

    <!-- Data e Hora -->
    <p class="text-xs text-gray-400">
      📅 Entrada: {{ dados.data }} {{ dados.hora }}
    </p>

    <!-- Cliente -->
    <p class="text-sm text-gray-700">
      Cliente: {{ dados.cliente }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  dados: Object
})
</script>
