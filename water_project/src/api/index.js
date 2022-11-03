import { water } from '@/utils/request.js'

//设备详情
const equipmentDetail = did => water.get(`dev/lst-ali?dids=${did}`)  

// 钱包
const balanceDetail = did => water.get(`dev/wp/billing/balance?did=${did}`)  

// 启动
const startEquipment = did => water.put(`dev/wp/billing/start?did=${did}`, {})  

// 结束
const endEquipment = did => water.put(`dev/wp/billing/end?did=${did}`, {})  

// 充值水票
const waterVote = eid => water.get(`prd/lst?eid=${eid}&status=1&types=5&range=0&alisort=true`) 

export default {
  equipmentDetail,
  balanceDetail,
  startEquipment,
  endEquipment,
  waterVote
}
