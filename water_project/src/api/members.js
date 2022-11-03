import { water } from '@/utils/request.js'

//设备详情
const equipmentDetail = config =>
  water.get('/lst-ali', config)
export default {
  equipmentDetail,
}
