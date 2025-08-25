<template>
  <div class="bg-white rounded-xl shadow-md p-4 space-y-2 hover:shadow-lg transition">
    <span
      class="text-xs font-semibold px-2 py-1 rounded-full"
      :class="{
        'bg-red-100 text-red-600': dados.status === 'ATRASADO',
        'bg-yellow-100 text-yellow-600': dados.status === 'EM ANDAMENTO',
        'bg-green-100 text-green-600': dados.status === 'FINALIZADO'
      }"
    >
      {{ dados.status }}
    </span>
    <h3 class="font-bold text-gray-800">{{ dados.codigo }} - {{ dados.modelo }}</h3>
    <p class="text-sm text-gray-600">{{ dados.cliente }}</p>
    <p class="text-xs text-gray-400">📅 {{ dados.data }}</p>
  </div>
</template>

<script setup>
defineProps({
  dados: Object
})
</script>