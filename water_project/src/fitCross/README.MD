## 简介

本插件[fitCross] 主要集成了微信 sdk，支付宝 sdk 的统一调用方法，解决微信环境、支付宝环境的兼容处理问题，无需再在业务代码上进行环境的区分
出自四轮桩业务线前端团队（黄群乐、杨伏、何亮）

## 使用

1、安装： npm install fitCross
2、必须全局注入 scripts 脚本，调用方法：handleScript(), 建议把 targets 挂在在 window 上

- handleScript 参数：{wx: [], ali: [], wxMini: []}，可选， 注： 传入的参数一定更要全部传入
- 默认的参数是
  ```
    let sdkObj = {
      wx: ['//res.wx.qq.com/open/js/jweixin-1.6.0.js'],
      ali: [
        'https://gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js',
      ],
      wxMini: [
        '//res.wx.qq.com/open/js/jweixin-1.6.0.js',
        '//js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js',
      ],
    }
  ```
- 例子：

  ```
  index.js 入口文件文件
  import { targets, handleScript, publicMethod, handleEnvFn } from 'fitCross'
  const  = {
    wx: ['xxx'],
    ali: [
      'xxx',
    ],
    wxMini: [
      'xxx',
      'xxx',
    ],
  }
  <!-- 参数不传，走库默认sdk -->
  handleScript(sdk)

  window.targets = targets
  window.publicMethod = publicMethod
  window.curEnv = handleEnvFn()
  ```

3、常用的使用方法：

- handleEnvFn 判断当前环境 返回值 string： wx、 ali、 aliMini、 wxMini、cloud、jd
- handleScript 执行当前插入 scripts 脚本，也就是引入对应的 sdk， 参数：{wx: [], ali: [], wxMini: []}, 注： 云闪付，京东没有对应的 sdk，直接调用即可
- publicMethod 库内的公共方法，authorization
- targets 所有方法的集合， 如： targets.scan()

4、targets 集合的方法

- userAuthorization 授权登录
  - 参数
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    |参数|参数类型|是否必传|参数说明|
    |merchantId |string|是|商户 id，两个参数，如果是商户 di 授权，就不用设备 id， 二选一|
    |equipmentValue |string|是|设备 id，两个参数，如果是设备 di 授权，就不用商户 id， 二选一|
  - 使用例子
    ```
    targets.userAuthorization({
      merchantId: getUrlParam('merchantId'),
    })
    ```
- getSign（第一参数， 第二参数） 鉴权（只有微信有鉴权，支付宝、云闪付不需要，但是调用 getSign 也不会报错）

  - 第一参数（必填）
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    | appId | string | 是 | 微信 APPID|
    | timeStamp | string | 是 | 支付签名时间戳，后端生成|
    | nonceStr | string | 是 | 支付签名随机串，不长于 32 位，后端生成|
    | signature | string | 是 | 签名，后端生成|
  - 第二参数（非必填）
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    | 数组 | array | 否 | 需要调用的能力|

    ```
      <!-- 第二参数默认 -->
      [
        'openBusinessView',
        'scanQRCode',
        'openLocation',
        'getLocation',
        'getBrandWCPayRequest',
      ]
    ```

    ```
      api.members.getAppId(params).then(res => {
        targets.getSign(res)
      })
    ```

- scanQRCode 使用了 Promise 封装（支持支付宝，微信，不支持云闪付，调起会返回不支持扫一扫）
  - 参数
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    |第一参数|number|否|1 或 0, 默认是 1|
    |第二参数|array |否| ["qrCode","barCode"] 默认是 ["qrCode"]， qrCode 是二维码|
  - 返回数据
    |字段|参数类型|参数说明|
    | --- | --- | --- |
    |code|string|'200'扫码成功 '403' 暂不支持|
    |resultStr|string|扫码成功返回结果|
    |msg|string|提示语|
  - 返回结果示例
    ```
    <!-- 成功 -->
      {
        code: '200',
        resultStr: str1,
        msg: '扫码成功',
      }
    <!-- 暂不支持 -->
    {
      code: '403',
      resultStr: str2,
      msg: '云闪付暂不支持扫一扫',
    }
    ```
  - 使用例子
    ```
      targets.scanQRCode().then(res => {
        if (res.code === '200') {
          <!-- 扫码成功 -->
        }
        if (res.code === '403') {
          <!-- 扫码暂不支持 -->
          Toast(res.msg)
          return
        }
      })
    ```
- openLocation 使用了 Promise 封装（支持支付宝，微信，不支持云闪付，调起会返回不支持打开位置）

  - 参数
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    | latitude | float | 是 |纬度，浮点数，范围为 90 ~ -90|
    | longitude | float | 是 |经度，浮点数，范围为 180 ~ -180|
    | name | string | 是 |位置名|
    | address | string | 是 |地址详情说明|
    | scale | number | 是 |地图缩放级别,整型值,范围从 1~28。默认为最大|
  - 返回数据
    |字段|参数类型|参数说明|
    | --- | --- | --- |
    |code|string|'200' 打开位置成功 '403' 暂不支持|
    |resultStr|string|打开位置返回结果''|
    |msg|string|提示语|

  - 使用例子

    ```
      function(options) {
        targets.openLocation({
            latitude: parseFloat(options.lat),
            longitude: parseFloat(options.lng),
            name: options.stationName,
            address: options.address,
            scale: options.scale,
          })
          .then(res => {
            if (res.code === '403') {
              this.$toast(res.msg)
            }
          })
      }
    ```

- tradePay 使用了 Promise 封装

  - 微信参数
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    | appId | string | 是 | 微信 APPID|
    | timeStamp | string | 是 | 支付签名时间戳，后端生成|
    | nonceStr | string | 是 | 支付签名随机串，不长于 32 位，后端生成|
    | package | string | 是 | 统一支付接口返回的 prepay_id 参数值，后端生成|
    | signType | string | 是 | 微信支付 V3 的传入 RSA ,微信支付 V2 的传入格式与 V2 统一下单的签名格式保持一致，后端生成|
    | paySign | string | 是 | 支付签名，后端生成|
  - 支付宝参数
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    | tradeNO | string | 是 |订单号|
    | partnerID | string | 否 |商户 id|
    | bizType | string | 否 |交易类型，默认为 ‘trade’|
    | bizSubType | string | 否 |交易子类型|
    | bizContext | string | 否 |支付额外的参数，格式为 JSON 字符串|
    | orderStr | string | 否 |完整的支付参数拼接成的字符串，从服务端获取|
  - 云闪付参数
    |参数|参数类型|是否必传|参数说明|
    | --- | --- | --- | --- |
    | payInfo | string | 是 |订单信息|
  - 返回数据
    |字段|参数类型|参数说明|
    | --- | --- | --- |
    |code|string| 支付状态码 |
    |msg|string|提示语|

  - 状态码
    |code 状态码|类型|参数说明|
    | --- | --- | --- |
    |9000|number| 支付成功 |
    |4000|number| 支付失败 |
    |6001|number| 支付取消 |
    |6002|number| 网络出错 |

  - 使用例子
    ```
      targets.tradePay(body).then(res => {
        console.log(333, res)
      })
    ```
