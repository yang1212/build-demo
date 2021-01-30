import crypto from 'crypto' // 这个模块的主要功能是加密解密

module.exports = {
  MD5_SUFFIX: 'eiowafnajkdlfjsdkf@#￥%……&）（*&……）',
  md5: function (pwd) {
    let md5 = crypto.createHash('md5');
    return md5.update(pwd).digest('hex')
  },
  responseClient(res,httpCode = 500, code = 3,message='服务端异常',data={}) {
    let responseData = {};
    responseData.resultCode = code;
    responseData.message = message;
    responseData.data = data;
    res.status(httpCode).json(responseData)
  }
}