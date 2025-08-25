<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 mt-6">
    <CardResumo
      titulo="Faturamento"
      valor="R$ 57.257,00"
      variacao="12% vs mês passado"
      icone="/icons/money.svg"
    />
    <CardResumo
      titulo="Serviços"
      valor="R$ 17.257,00"
      variacao="8% vs mês passado"
      icone="/icons/tools.svg"
    />
    <CardResumo
      titulo="Peças"
      valor="R$ 47.257,00"
      variacao="5% vs mês passado"
      icone="/icons/parts.svg"
    />
  </div>
</template>

<script setup>
import CardResumo from './CardResumo.vue'
</script>