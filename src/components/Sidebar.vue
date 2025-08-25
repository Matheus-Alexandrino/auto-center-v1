<template>
  <aside class="w-13 h-screen bg-white shadow-md fixed top-0 left-0 flex flex-col items-center justify-between py-6 z-50">
    <!-- Topo com logo -->
    <div class="flex flex-col items-center space-y-4">
    <img src="/icons/home.svg" alt="" class="" />
    <SidebarItem icon="/icons/logo.svg" label="" />

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