import Vue from 'vue'
import VueRouter from 'vue-router'
import subApp1 from '../views/subApp1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/subApp1',
    name: 'subApp1',
    component: subApp1
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
