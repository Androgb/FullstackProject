import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/views/Register.vue';
import Products from '@/views/Products.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  { path: '/', component: Register },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
