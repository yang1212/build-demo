//登录函数
const userAuthorization = data => {
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${data.appId}&redirect_uri=${data.redirectUrl}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
}

//微信鉴权函数
const getSign = (data, jsApiList) => {
  window.wx.config({
    // debug: true,
    appId: data.appId,
    timestamp: data.timestamp,
    nonceStr: data.nonceStr,
    signature: data.signature,
    jsApiList: jsApiList || [
      'openBusinessView',
      'openLocation',
      'getLocation',
      'getBrandWCPayRequest',
    ],
  })
  window.wx.ready(e => {
    console.log('入口微信授权成功', e)
    window.wx.error(e => {
      console.log('入口微信授权失败', e)
    })
  })
}

const tradePay = res => {
  return new Promise(function (resolve, reject) {
    window.WeixinJSBridge.invoke(
      'getBrandWCPayRequest',
      {
        //微信APPID
        appId: res.appId,
        // 支付签名时间戳，后端生成
        timeStamp: res.timeStamp,
        // 支付签名随机串，不长于 32 位，后端生成
        nonceStr: res.nonceStr,
        // 统一支付接口返回的prepay_id参数值，后端生成
        package: res.package,
        //微信支付V3的传入 RSA ,微信支付V2的传入格式与V2统一下单的签名格式保持一致，后端生成
        signType: res.signType,
        //支付签名，后端生成
        paySign: res.paySign,
      },
      payResult => {
        const errMsg = payResult.err_msg
        if (errMsg === 'get_brand_wcpay_request:ok') {
          resolve({
            code: 9000,
            msg: '支付成功',
          })
        } else if (errMsg === 'get_brand_wcpay_request:fail') {
          reject({
            code: 4000,
            state: '支付失败',
          })
        } else if (errMsg === 'get_brand_wcpay_request:cancel') {
          reject({
            code: 6001,
            state: '支付取消',
          })
        }
      },
    )
  })
}

export { userAuthorization, getSign, tradePay }
