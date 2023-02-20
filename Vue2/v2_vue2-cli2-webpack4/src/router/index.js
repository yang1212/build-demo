import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: 'index' */ '../pages/index')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import(/* webpackChunkName: 'tab1' */ '../pages/tab1/index')
    }
  ]
})
