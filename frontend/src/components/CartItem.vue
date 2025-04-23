<script setup>
const props = defineProps({
  item: Object
})

const emit = defineEmits(['update'])

const increase = () => {
  emit('update', props.item.product._id, 1)
}
const decrease = () => {
  emit('update', props.item.product._id, -1)
}
const handleRemove = () => {
  emit('remove', props.item.product._id)
}
</script>

<template>
  <div class="item-container">
    <div>
      <h2 class="font-bold">{{ item.product.name }}</h2>
      <p class="text-sm text-gray-600">
        Cantidad: 
        <button class="btn-small" @click="increase">+</button>
        {{ item.quantity }}
        <button class="btn-small" @click="decrease">-</button>
      </p>
    </div>
    <p class="font-semibold">${{ item.product.price * item.quantity }}</p>
    <button class="btn" @click="handleRemove">Delete</button>
  </div>
</template>

<style scoped>
.btn-small {
  background: #ccc;
  padding: 2px 8px;
  margin-left: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn{
  background: #e63946;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
