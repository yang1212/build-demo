import Vue from 'vue';
import App from './App.vue';
import { registerMicroApps, start } from 'qiankun';
import router from './router'

Vue.config.productionTip = false;


// 注册子应用
registerMicroApps([
  {
    name: 'sub-app1', // 子应用名称
    entry: '//localhost:8081', // 子应用的入口 URL
    container: '#subapp-container', // 子应用的容器元素
    loader: (loading) => loading, // 可选，加载子应用时的 loading 组件
    activeRule: '/about', // 子应用的激活规则，用于匹配路由
  },
]);

// 启动微前端框架
start();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
