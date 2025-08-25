<template>
  <div class="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
    <div>
      <h2 class="text-sm text-gray-500">{{ titulo }}</h2>
      <p class="text-3xl font-bold text-gray-800">{{ valor }}</p>
      <p class="text-xs text-gray-400">↗ {{ variacao }}</p>
    </div>
    <img :src="icone" class="w-34 h-14" alt="Ícone" />
  </div>
</template>

<script setup>
defineProps({
  titulo: String,
  valor: String,
  variacao: String,
  icone: String
})
</script>