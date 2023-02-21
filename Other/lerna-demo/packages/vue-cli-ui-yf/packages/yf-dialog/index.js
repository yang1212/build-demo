// 导入组件，组件必须声明 name
import yfDialog from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
yfDialog.install = function (Vue) {
  Vue.component(yfDialog.name, yfDialog)
}

// 默认导出组件
export default yfDialog