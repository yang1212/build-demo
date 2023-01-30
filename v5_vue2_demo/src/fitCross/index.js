const publicMethod = require(`./utils/index.js`)
import { Toast } from 'vant'

const isWx = () => {
  return (
    /MicroMessenger/i.test(navigator.userAgent) &&
    !/miniProgram/i.test(navigator.userAgent)
  )
}
const isAli = () => {
  return (
    /AlipayClient/i.test(navigator.userAgent) &&
    !/miniprogram/i.test(navigator.userAgent)
  )
}
const isWxMini = () => {
  return (
    /MicroMessenger/i.test(navigator.userAgent) &&
    /miniProgram/i.test(navigator.userAgent)
  )
}
const isAliMini = () => {
  return (
    /AlipayClient/i.test(navigator.userAgent) &&
    /miniprogram/i.test(navigator.userAgent)
  )
}
const isCloud = () => {
  return /UnionPay|CloudPay/i.test(navigator.userAgent)
}
const isJDorJR = () => {
  return /JDJR|jdapp/i.test(navigator.userAgent)
}

// wx: 微信， ali：支付宝  wxMini： 微信小程序  aliMini： 支付宝小程序
let objFns = {
  // isChr: isChrome,
  wx: isWx,
  ali: isAli,
  wxMini: isWxMini,
  aliMini: isAliMini,
  cloud: isCloud,
  jd: isJDorJR,
}

let sdkObj = {
  wx: ['//res.wx.qq.com/open/js/jweixin-1.6.0.js'],
  ali: [
    'https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js',
  ]
}

let keys = Object.keys(objFns)
// 判断运行环境
const handleEnvFn = () => {
  let fns = Object.values(objFns)
  let values = new Array(fns.length)
  let count = 0
  fns.forEach((item, index) => {
    count++
    values[index] = item()
  })
  if (count === fns.length) {
    let idx = values.indexOf(true)
    return keys[idx]
  }
}
// 当前运行环境可执行方法
const fnTargets = () => {
  let targets = {}
  let key = handleEnvFn()
  console.log('当前运行环境', key)
  console.log(navigator.userAgent)
  if (key && keys.indexOf(key) > -1) {
    console.log('-fnTargets--', key)
    targets = require(`./lib/${key}.js`)
  } else {
    Toast('请在微信、支付宝中访问')
    throw Error('当前只支持微信、微信小程序、支付宝、支付宝小程序')
  }
  return targets
}
// 加载scripts方法
function loadScript(url, callback) {
  for (let i = 0; i < url.length; i++) {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    if (script.readyState) {
      // 如果有这个属性就是IE浏览器
      // 这个函数只有IE浏览器才有，当JS文件被下载完成后就会被触发
      script.onreadystatechange = function () {
        // 当条件满足 表示JS文件以及被下载完成 可以被调用了
        if (
          script.readyState === 'complete' ||
          script.readyState === 'loaded'
        ) {
          if (callback) {
            callback()
          }
        }
      }
    } else {
      // 其他主流浏览器
      script.onload = function () {
        // 浏览下载完成js后 执行onload回调，此时就可以访问JS文件的函数和变量了
        if (callback) {
          callback()
        }
      }
    }
    script.src = url[i] // 这一句执行完成，系统就会去下载这个地址里的东西，并且也是异步的去下载
    document.head.appendChild(script) // 当吧script插入
  }
}

// 执行scripts的对应sdk, 穿进来的sdk集合 {wx: [],ali:[], wxMini:[] }
const handleScript = params => {
  let sdkObjList = params || sdkObj
  let key = handleEnvFn()
  if (key && Object.keys(sdkObjList).indexOf(key) > -1) {
    loadScript(sdkObjList[key], () => {
      console.log('---内部执行-handleScript-')
    })
  }
}
let targets = fnTargets()

export { handleEnvFn, handleScript, targets, publicMethod }
