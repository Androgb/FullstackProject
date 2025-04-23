// services/cartService.ts
import api from './api'

export const addToCart = (ownerId: string, productId: string, quantity = 1) => {
  return api.post('/cart', {
    ownerId,
    productId,
    quantity,
  })
}

export const getCart = (ownerId: string) => {
  return api.get(`/cart/${ownerId}`)
}

export const removeFromCart = (ownerId: string, productId: string) => {
  return api.put('/cart/remove', {
    ownerId,
    productId,
  })  
}
export const updateCartQuantity = (ownerId: string, productId:string, change:number) => {
  return api.put('/cart/update-quantity', { ownerId, productId, change });
}
