import _ from 'lodash'
import { add1 } from './common'

function add(a, b) {
  return a + b
}
function mul(a, b) {
  return a * b
}
let sum = add1(1, 4)
let value = _.concat([1,3], 4)
console.log(sum, value)

export { add, mul }
