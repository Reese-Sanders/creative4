import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Rent from '../views/Rent.vue'
import Contact from '../views/Contact.vue'
import Waiver from '../views/Waiver.vue'
import Policies from '../views/Policies.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/rent',
    name: 'rent',
    component: Rent
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/waiver',
    name: 'waiver',
    component: Waiver
  },
  {
    path: '/policies',
    name: 'policies',
    component: Policies
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
