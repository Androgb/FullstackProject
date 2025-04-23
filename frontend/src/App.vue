<script setup>
import { useRoute } from 'vue-router'
import { useUserStore } from "@/stores/userStore";

const route = useRoute()
const userStore = useUserStore()
</script>

<template>
  <div id="app">
    <header v-if="route.path !== '/' && route.path !== '/register'">
      <nav>
        <RouterLink to="/register">Register</RouterLink> |
        <RouterLink to="/home">Home</RouterLink> |
        <RouterLink to="/cart">Cart</RouterLink>
        <div v-if="userStore.user?.role === 'admin'">|
          <RouterLink to="/users"> Users</RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 20px;
  }
  
  nav {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  
  a {
    text-decoration: none;
    color: #42b983;
  }
  
  a.router-link-exact-active {
    font-weight: bold;
  }
  </style>