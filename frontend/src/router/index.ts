import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Login  from '@/views/Login.vue'
import Users from '@/views/Users.vue'
import { useUserStore }  from '@/stores/userStore'

  const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home, meta: { requiresAuth: true } },
    { path: '/cart', component: Cart, meta: { requiresAuth: true } },
    { path: '/users', component: Users, meta: { requiresAuth: true, requiresAdmin: true } },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = !!userStore.user
  const isAdmin = userStore.user?.role === 'admin'

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else if (to.meta.requiresAdmin && !isAdmin) {
    next('/home') // o muestra una página de acceso denegado
  } else {
    next()
  }
})


export default router