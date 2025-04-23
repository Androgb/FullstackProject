<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Products</h1>
    <div class="container">
      <!-- SOLO ADMIN puede ver el formulario de CRUD -->
    <div v-if="userStore.user?.role === 'admin'" class="crud-panel">
      <h2 class="text-lg font-semibold mb-2">{{ isEditing ? 'Edit Product' : 'Create Product' }}</h2>
      <form @submit.prevent="handleSubmit" class="form-container">
        <input v-model="form.name" placeholder="Product name" class="input" required />
        <input v-model="form.price" type="number" placeholder="Price" class="input" required />
        <textarea v-model="form.description" placeholder="Description" class="input" required />
        <div class="flex gap-2">
          <button type="submit" class="btn btn-primary">
            {{ isEditing ? 'Update' : 'Create' }}
          </button>
          <button v-if="isEditing" @click="resetForm" type="button" class="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>

    <div class="container">
      <!-- Lista de productos -->
      <div
        v-for="product in products"
        :key="product._id"
        class="product-wrapper"
      >
        <ProductCard
          :product="product"
          @add-to-cart="addToCart"
        />
        
        <!-- Botones de admin -->
        <div v-if="userStore.user?.role === 'admin'" class="admin-actions">
          <button @click="editProduct(product)" class="btn-sm btn-blue">Edit</button>
          <button @click="deleteProduct(product._id)" class="btn-sm btn-red">Delete</button>
        </div>
      </div>
    </div>
    </div>
    

    <br />
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
const userStore = useUserStore()
const products = ref([])

const form = ref({ name: '', price: 0, description: '' })
const isEditing = ref(false)

onMounted(async () => {
  if (!userStore.user) router.replace('/')
  await fetchProducts()
})

const fetchProducts = async () => {
  const res = await api.get('/products')
  products.value = res.data
}

const handleSubmit = async () => {
  try {
    const productData = {
      name: form.value.name,
      price: Number(form.value.price),
      description: form.value.description,
      owner: userStore.user._id, // Campo obligatorio
    }

    if (isEditing.value) {
      await api.put(`/products/${form.value._id}`, productData)
      alert('Producto actualizado exitosamente')
    } else {
      await api.post('/products', productData)
      alert('Producto creado exitosamente')
    }

    await fetchProducts()
    resetForm()
  } catch (error) {
    console.error('Error al guardar producto:', error)
    alert('Hubo un error al guardar el producto')
  }
}

const editProduct = (product) => {
  form.value = { ...product } // Incluye _id para edición
  isEditing.value = true
}


const deleteProduct = async (id) => {
  try {
    await api.delete(`/products/${id}`)
    products.value = products.value.filter(p => p._id !== id)
  } catch (err) {
    console.error(err)
    alert('No se pudo eliminar el producto.')
  }
}


const resetForm = () => {
  form.value = { name: '', price: 0, description: '' }
  isEditing.value = false
}

const addToCart = async (product) => {
  await api.post('/cart', {
    ownerId: userStore.user._id,
    productId: product._id,
    quantity: 1
  })
  alert('Product added to cart!')
}

const logout = () => {
  userStore.setUser(null)
  router.push('/')
  alert('Logged out successfully!')
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
}

.product-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crud-panel {
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 400px;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.btn {
  background-color: #3490dc;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #4caf50;
}

.btn-secondary {
  background-color: #9ca3af;
  margin-left: 10px;
}

.btn-sm {
  padding: 6px 10px;
  font-size: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}

.btn-blue {
  background-color: #3b82f6;
  color: white;
}

.btn-red {
  background-color: #ef4444;
  color: white;
}

.admin-actions {
  display: flex;
  gap: 8px;
  justify-content: center;
}
</style>
