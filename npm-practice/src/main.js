import Vue from 'vue'
import { yfDialog, yfLoading} from 'npm-nav-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(yfDialog)
Vue.use(yfLoading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
