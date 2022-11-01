import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/equipmentStart',
    name: 'equipmentStart',
    component: () => import(/* webpackChunkName: "about" */ '../views/equipmentStart.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
