<template>
  <aside class=" w-13 h-screen fixed top-0 left-10 flex flex-col items-center justify-between py-6 z-50">
    <!-- Topo com logo -->
    <div class="bg-gray-100 flex flex-col items-center space-y-4">
    <img src="/icons/logo.png" alt="logo" class="w-12 h-12" />    
      <!-- Ícones do menu -->
      <nav class="flex flex-col items-center space-y-6">
        <SidebarItem icon="/icons/home.svg" label="Home" />
        <SidebarItem icon="/icons/orders.svg" label="Ordens" />
        <SidebarItem icon="/icons/tools.svg" label="Serviços" />
        <SidebarItem icon="/icons/settings.svg" label="Configurações" />
      </nav>
    </div>

    <!-- Rodapé -->
    <div class="text-xs text-gray-300">© 2025</div>
  </aside>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'
</script>