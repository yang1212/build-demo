import { add1 } from './common'

function add(a, b) {
  return a + b
}
function mul(a, b) {
  return a * b
}
let sum = add1(1, 4)
console.log(sum)

export { add, mul }
