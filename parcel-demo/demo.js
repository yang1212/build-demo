let arrResult = []
// 获得数组原型
const ArrayProto = Array.prototype
const arrayMethods = Object.create(ArrayProto)
// 重写以下函数
const methodsToPatch = [
  'push'
]
methodsToPatch.forEach((method) => {
  // 缓存原生函数
  ArrayProto[method] = function() {
    console.log('视图更新')
    ArrayProto[method].call(this, ...arguments) 
  }
})
arrResult.__proto__ = ArrayProto
arrResult.push(1)
console.log(arrResult)