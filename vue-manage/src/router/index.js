import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: 'index' */ '../pages/index'),
      children: [
        {
          path: '/homePage1',
          name: 'homePage1',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/homePage/index')
        },
        {
          path: '/homePage2',
          name: 'homePage2',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/homePage/index')
        },
        {
          path: '/pushContent/:id',
          name: 'pushContent',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/pushContent/index')
        },
        {
          path: '/addDoc/:id',
          name: 'addDoc',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/pushContent/addDoc')
        },
        {
          path: '/editDoc/:id',
          name: 'editDoc',
          component: () => import(/* webpackChunkName: 'tab1' */ '../pages/pushContent/editDoc')
        }
      ]
    }
  ]
})
