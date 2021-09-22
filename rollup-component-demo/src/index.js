import _ from 'lodash'
import { add1 } from './common'

function add(a, b) {
  return a + b
}
function testFn(a) {
  return _.concat([1,3], a)
}
let sum = add1(1, 4)
console.log(sum)

export { add, testFn }
// 埋点相关SDK, 对接客服相关SDK, 对接支付的方案