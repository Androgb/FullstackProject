<template>
    <div class="p-4">
      <h1 class="text-xl font-bold mb-4">Login</h1>
      <form @submit.prevent="loginHandler" class="form-container">
        <input v-model="email" placeholder="Email" class="input" />
        <input v-model="password" placeholder="Password" type="password" class="input" />
        <button>Login</button>
      </form>
      <p class="register-text">
        Don't have an account?
        <RouterLink to="/register">Register here</RouterLink>
    </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { loginUser } from '@/services/authService.ts'
  import { useUserStore } from '@/stores/userStore.ts'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const userStore = useUserStore()
  const router = useRouter()
  
  const loginHandler = async () => {
    const user = await loginUser(email.value, password.value)
    userStore.setUser(user)
    router.push('/home')
  }
  </script>
  