import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/inicio.vue'
import JavaScript from '../views/JavaScript.vue'
import CSS from '../views/css.vue'

const routes = [
  { path: '/', name: 'inicio', component: Inicio },
  { path: '/javascript', name: 'JavaScript', component: JavaScript },
  { path: '/css', name: 'CSS', component: CSS }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router