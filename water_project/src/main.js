import Vue from 'vue'
import wx from 'weixin-js-sdk'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.prototype.$wx = wx
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
