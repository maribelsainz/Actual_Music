import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [{
    path: '/artistas',
    name: 'Artistas',
    alias: "/",
    component: () => import('../views/Artistas.vue')
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: () => import('../views/Articulos.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('../views/Administracion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router