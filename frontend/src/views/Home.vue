<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Products</h1>
      <div class="container">
        <!-- Aquí se renderizan los productos -->
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
        @add-to-cart="addToCart(product._id)"
      />
  </div>
      <br>
      <button @click="logout" class="btn mt-4">Logout</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import api from '@/services/api'
  import { useUserStore } from '@/stores/userStore'
  import { useRouter } from 'vue-router'
  import ProductCard from '@/components/ProductCard.vue'

  const router = useRouter()
  const products = ref([])
  const userStore = useUserStore()
  
  onMounted(async () => {
    if (!userStore.user) router.replace('/login')
    const res = await api.get('/products')
    products.value = res.data
  })
  
  const addToCart = async (productId) => {
    await api.post('/cart', {
      ownerId: userStore.user._id,
      productId,
      quantity: 1
    })
    alert('Product added to cart!')
  }
  const logout = () => {
    userStore.setUser(null) // Borra el usuario
    router.push('/login')   // Redirige al login
    alert('Logged out successfully!') // Mensaje de éxito
  }
  </script>
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;  
  }
  .btn {
    background-color: #3490dc;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
</style>