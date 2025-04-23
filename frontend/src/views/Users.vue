<template>
    <div>
      <h1 class="text-xl font-bold mb-4">All users</h1>
      <p class="text-gray-600">Total users: {{ users.length }}</p>
      <p class="text-gray-600">Total admins: {{ users.filter(user => user.role === 'admin').length }}</p>
      <div class="container" v-if="users.length">
        <UserItem v-for="user in users" :key="user._id" :user="user" />
        
      </div>
      <div v-else>
        <p>No users found.</p>
      </div>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  import { fetchUsers } from '@/services/userService'
  import UserItem from '@/components/UserItem.vue'
  
  const users = ref([])
  
  onMounted(async () => {
    users.value = await fetchUsers()
  })
</script>
  <style></style>