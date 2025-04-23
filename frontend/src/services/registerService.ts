import api from './api'

export const registerUser = async (payload: any) => {
  const res = await api.post('/users', payload)
  return res.data
}