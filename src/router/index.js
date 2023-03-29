import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/Index.vue'
import EditView from '../views/edit/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView
    }
  ]
})

export default router
