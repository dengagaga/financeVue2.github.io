import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExpensView from '../views/ExpensView.vue'
import AllView from '../views/AllView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ExpensView',
      name: 'ExpensView',
      component: ExpensView
    },
    {
      path: '/AllView',
      name: 'AllView',
      component: AllView
    }
  ]
})

export default router
