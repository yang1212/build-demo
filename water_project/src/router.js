import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/equipmentLoad',
      name: 'equipmentLoad',
      component: () => import(/* webpackChunkName: "equipmentLoad" */ './views/equipmentLoad.vue')
    },
    {
      path: '/equipmentDetail',
      name: 'equipmentDetail',
      component: () => import(/* webpackChunkName: "equipmentDetail" */ './views/equipmentDetail.vue')
    },
    {
      path: '/phoneBind',
      name: 'phoneBind',
      component: () => import(/* webpackChunkName: "phoneBind" */ './views/phoneBind.vue')
    },
  ]
})
