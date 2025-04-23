<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register" class="form-container">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" type="password" />
      <button>Register</button>
    </form>
    <p class="mt-4">
      Already have an account?
      <router-link to="/login" class="text-blue-500 underline">Login here</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { registerUser } from '@/services/registerService';

const name = ref('');
const email = ref('');
const password = ref('');

const register = async () => {
  await registerUser({ name: name.value, email: email.value, password: password.value });
  alert('User created!');
};
</script>
<style>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: auto;
}</style>