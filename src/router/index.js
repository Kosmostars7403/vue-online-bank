import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {path: '/', component: Home, name: 'Home', meta: {layout: 'main', auth: true}},
  {path: '/help', component: () => import('../views/Help.vue'), name: 'Help', meta: {layout: 'main', auth: true}},
  {path: '/auth', component: () => import('../views/Auth.vue'), name: 'Help', meta: {layout: 'auth', auth: false}},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
