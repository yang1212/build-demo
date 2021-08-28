import Vue from 'vue'
import navUI from 'npm-nav-ui' // 暂不可按需引入
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(navUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
