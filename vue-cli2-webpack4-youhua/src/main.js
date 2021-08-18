// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Table, TableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// 按需引入vxe-table
import 'xe-utils'
import './common/vuxTable'
// 按需引入element
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
