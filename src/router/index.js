import Vue from 'vue'
import VueRouter from 'vue-router'

import catalog from '../components/catalog'
import cart from '../components/cart'



Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'catalog',
      component: catalog,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      props:true,
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
