import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

export async function bootstrap() {
  // 初始化逻辑
}

export async function mount() {
  // 挂载逻辑
}

export async function unmount() {
  // 卸载逻辑
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')