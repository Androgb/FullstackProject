<script setup>
defineProps(['product'])
const emit = defineEmits(['add-to-cart'])
</script>

<template>
  <div class="border p-4 rounded shadow">
    <h3 class="text-lg font-bold">{{ product.name }}</h3>
    <p class="text-gray-600">${{ product.price }}</p>
    <button @click="emit('add-to-cart', product)" class="bg-blue-500 text-white px-3 py-1 mt-2 rounded">
      Add to Cart
    </button>
  </div>
</template>
