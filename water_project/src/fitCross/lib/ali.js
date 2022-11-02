//登录函数
const userAuthorization = data => {
  return new Promise(function (resolve) {
    // eslint-disable-next-line no-undef
    ap.getAuthCode ({
      appId: data.appId  ,
      scopes: ['auth_base'],
    },function(res) {
      resolve({
        code: 200,
        msg: '授权成功',
      })
      console.log(1, res.authCode)
      // 基于res.authCode调用后端接口获取token
      // ap.alert (JSON.stringify(res));
    });
  })
}

const getSign = () => {
  console.log('---getSign--支付宝--')
}

/**
 *  tradeNO	    String	否	交易号，多个交易号请用英文分号;分隔
 *  partnerID	  String	否	商户id
 *  bizType	    String	否	交易类型，默认为 ‘trade’
 *  bizSubType	String	否	交易子类型
 *  bizContext	String	否	支付额外的参数，格式为JSON字符串
 *  orderStr    String	否	完整的支付参数拼接成的字符串，从服务端获取。需要入驻蚂蚁金服开放平台
 */
const tradePay = res => {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line no-undef
    ap.tradePay(
      {
        tradeNO: res.tradeNO,
        partnerID: res.partnerID,
        bizType: res.bizType,
        bizSubType: res.bizSubType,
        bizContext: res.bizContext,
        orderStr: res.orderStr,
      },
      function (res) {
        const { resultCode } = res
        // eslint-disable-next-line no-undef
        if (resultCode === '9000') {
          resolve({
            code: 9000,
            msg: '支付成功',
          })
        }
        if (resultCode === '4000') {
          reject({
            code: 4000,
            msg: '支付失败',
          })
        }
        if (resultCode === '6001') {
          reject({
            code: 6001,
            msg: '支付取消',
          })
        }
        if (resultCode === '6002') {
          reject({
            code: 6002,
            msg: '网络出错',
          })
        }
        if (resultCode === '99') {
          reject({
            code: 99,
            msg: '用户点击忘记密码导致快捷界面退出',
          })
        }
      },
    )
  })
}

export { userAuthorization, getSign, tradePay }
