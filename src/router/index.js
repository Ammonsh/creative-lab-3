import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Finished from '../views/Finished.vue'
import Unfinished from '../views/Unfinished.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/finished',
    name: 'Finished',
    component: Finished
  },
  {
    path: '/unfinished',
    name: 'Unfinished',
    component: Unfinished
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
