import Vue from 'vue'
import wx from 'weixin-js-sdk'
import App from './App.vue'
import router from './router'
import store from './store'
//全局引入vant样式
import 'vant/lib/index.css'
import api from './api'
import './registerServiceWorker'
import {
  targets,
  handleScript,
  publicMethod,
  handleEnvFn,
} from './fitCross/index'

Vue.config.productionTip = false
Vue.prototype.$wx = wx
Vue.prototype.$api = api

window.targets = targets
window.publicMethod = publicMethod
window.curEnv = handleEnvFn()

//项目初始化函数
function initialization() {
  handleScript()
}

initialization()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})