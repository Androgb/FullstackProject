<script setup>
defineProps(['user'])
</script>

<template>
  <div class="user-container">
    <p><strong>Nombre:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Rol:</strong> {{ user.role }}</p>
  </div>
</template>

<style scoped>
    .user-container {
      border: 1px solid #ccc;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      min-width: 250px;
    }
</style>
