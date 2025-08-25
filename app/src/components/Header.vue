<template>
  <div class="flex justify-between items-center px-6 py-4 bg-white rounded-xl shadow-md">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">
        Olá, <span class="text-orange-500">Matheus!</span> 👋
      </h1>
      <p class="text-sm text-gray-500">Aqui está o resumo da sua oficina hoje</p>
    </div>
    <button @click="$emit('abrirModal')" class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
      + Adicionar OS
    </button>
  </div>
</template>
