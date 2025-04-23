<!-- src/views/Cart.vue -->
<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Your Cart</h1>
    <div class="container" v-if="cart && cart.items.length">
      <CartItem
        v-for="item in cart.items"
        :key="item.product._id"
        :item="item"
        @remove="removeItem"
        @update="updateQuantity"
      />
    </div>
    <div v-else>
      <p>No items in cart.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import api from '@/services/api'
import { useUserStore } from '@/stores/userStore'
import CartItem from '@/components/CartItem.vue'
import { getCart, removeFromCart, updateCartQuantity } from '@/services/cartService'

const cart = ref(null)
const userStore = useUserStore()

const fetchCart = async () => {
  const res = await getCart(userStore.user._id)
  cart.value = res.data
}
const removeItem = async (productId) => {
  await removeFromCart(userStore.user._id, productId)
  await fetchCart()
}

const updateQuantity = async (productId, change) => {
  await updateCartQuantity(userStore.user._id, productId, change)
  await fetchCart()
}

onMounted(fetchCart)
</script>
