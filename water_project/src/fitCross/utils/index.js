//登录函数
const authorization = data => {
  let authenticationValue = ''
  //默认值,微信鉴权
  const defaultData = {
    useAgent: 'MicroMessenger',
    category: 'merchant',
    internal: 'false',
    silent: 'false',
    merchantId: '',
    equipmentValue: '',
  }
  //拼接对象，入参data没有的key值，使用默认值defaultData的key
  const userAuthorizationData = Object.assign(defaultData, data)
  let href = encodeURIComponent(window.location.href)
  //使用设备ID或者商户ID鉴权
  if (
    userAuthorizationData.merchantId === '' &&
    userAuthorizationData.equipmentValue === ''
  ) {
    throw Error('请传入商户ID或设备ID')
  } else {
    authenticationValue =
      userAuthorizationData.merchantId === ''
        ? `&equipmentValue=${userAuthorizationData.equipmentValue}`
        : `&menuMerchantId=${userAuthorizationData.merchantId}`
  }
  window.location.href = `/auth/rest/auth/third?useAgent=${userAuthorizationData.useAgent}&category=${userAuthorizationData.category}&internal=${userAuthorizationData.internal}&silent=${userAuthorizationData.silent}${authenticationValue}&redirectUrl=${href}`
}

export { authorization }
