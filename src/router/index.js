import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NuevaSimulacion from '../views/NuevaSimulacion.vue'
import ListadoCompras from '../views/ListadoCompras.vue'
import DashBoard from '../views/DashBoard.vue'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NuevaSimulacion',
    name: 'NuevaSimulacion',
    component: NuevaSimulacion
  },
  {
    path: '/ListadoCompras',
    name: 'ListadoCompras',
    component: ListadoCompras
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
