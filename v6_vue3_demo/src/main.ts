import { createApp } from 'vue'
import wx from 'weixin-js-sdk'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$wx = wx
app.mount('#app')
