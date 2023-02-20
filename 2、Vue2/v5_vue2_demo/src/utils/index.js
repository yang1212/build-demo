function getUrlParam(name) {
  let reg = new RegExp('(^|\\?|&)' + name + '=([^&]*)(\\s|&|$)', 'i')
  if (reg.test(window.location.href)) {
    return unescape(RegExp.$2.replace(/\+/g, ' '))
  } else {
    return false
  }
}

export {
  getUrlParam
}