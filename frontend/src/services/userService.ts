// services/productService.ts
import api from './api'

export const fetchUsers = async () => {
  const res = await api.get('/users')
  return res.data
}