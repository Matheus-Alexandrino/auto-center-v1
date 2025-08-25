<template>
  <div class="px-6 mt-8">
    <h2 class="text-lg font-bold text-gray-700 mb-4">Ordens de Serviço</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CardServico
        v-for="os in ordens"
        :key="os.id"
        :dados="os"
      />
    </div>
  </div>
</template>

<script setup>
import CardServico from './CardServico.vue'
defineProps({
  ordens: Array
})
</script>