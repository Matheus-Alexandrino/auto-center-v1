<template>
  <div class="group relative flex items-center justify-center w-10 h-10 cursor-pointer">
    <img :src="icon" class="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition" />

    <!-- Tooltip -->
    <span class="absolute left-12 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  label: String
})
</script>