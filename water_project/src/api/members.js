import { water } from '@/utils/request.js'

//用户信息
const memberInfo = config =>
  water.get('/member/member_info', {
    ...config,
    isAuthentication: true,
  })
export default {
  memberInfo,
}
