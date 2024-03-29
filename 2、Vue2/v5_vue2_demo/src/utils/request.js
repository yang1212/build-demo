import axios from 'axios'

export default class API {
  created(config) {
    this.api = axios.create(config)
  }
  constructor(config) {
    this.created(config)
  }
  getInstance() {
    //请求拦截器
    this.api.interceptors.request.use(function (config) {
      //是否需要鉴权，默认为true
      let isAuthentication = config.isAuthentication === false ? false : true
      if (isAuthentication) {
        // config.headers['Authorization'] = JSON.parse(
        //   localStorage.getItem('url_token'),
        // )
        config.headers['Authorization'] = 'Basic 15db2fb1df3df2dc1e41ed6381ec477b'
        return config
      } else {
        return config
      }
    })
    //响应拦截器
    this.api.interceptors.response.use(
      // 请求成功
      res => {
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          Promise.reject(res)
        }
      },
      // 请求失败
      error => {
        return Promise.reject(error)
      },
    )
    return this.api
  }
}

export const water = new API({
  baseURL: '/',
}).getInstance()

