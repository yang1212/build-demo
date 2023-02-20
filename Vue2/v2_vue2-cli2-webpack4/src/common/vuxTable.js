import Vue from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,
  Header,
  Column,
  Table
} from 'vxe-table'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

VXETable.setup({
  i18n: key => XEUtils.get(zhCN, key)
})

// 先按需导入依赖的模块
Vue.use(Header)
Vue.use(Column)
// 最后安装核心库
Vue.use(Table)
