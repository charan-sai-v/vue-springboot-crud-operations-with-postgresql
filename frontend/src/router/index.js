import { createRouter, createWebHistory } from 'vue-router'
import ViewPatients from '../views/ViewPatients.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewPatients
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddPatient.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdatePatient.vue')
    }
  ]
})

export default router
