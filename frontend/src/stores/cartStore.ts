import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: null
  }),
  actions: {
    setCart(cart: any) {
      this.cart = cart
    }
  }
})