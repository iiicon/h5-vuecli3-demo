import axios from 'axios'
import router from '@/router'
import store from '@/store'
import config from '_lib/config'
import { Toast } from 'cube-ui'

const showToast = (txt, type = 'txt', time = 2000) => { Toast.$create({ txt, type, time }, true).show() }
const toastLoding = Toast.$create({
  txt: '',
  mask: true,
  time: 200000
})
const removeToken = () => store.commit('CLEAR_TOKEN')

const goToAuth = () => {
}

class Http {
  constructor(baseUrl = config.BASE_URL) {
    this.baseUrl = baseUrl
  }

  getFixedConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      timeout: 20000
    }

    return config
  }

  interceptors(instance) {
    instance.interceptors.request.use(function (config) {

      let token = store.state.authToken || store.state.accessToken
      config.headers['token'] = token

      if (config.method === 'get') {
        config.data = true
      }
      return config
    }, function (error) {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(function (response) {
      toastLoding.hide()
      const errorCode = response.data.errorCode
      switch (errorCode) {
        case config.ERR_AUTH_EXPIRED:
          removeToken()
          showToast('身份过期，请重新登录')
          goToAuth()
          break;
        case config.ERR_NOT_LOGIN:
          removeToken()
          showToast('用户未登录')
          goToAuth()
          break;
        case config.ERR_FAIL_LOGIN:
          removeToken()
          showToast('网络异常，请重新登录')
          goToAuth()
          break;
        case config.ERR_SIGN_ELSE: case config.ERR_SIGN_OTHER_ELSE:
          removeToken()
          showToast('您的账号已在其他地方登录，请注意账号安全')
          goToAuth()
          break;
        default:
          // code
          break;
      }

      return response

    }, function (error) {
      console.log(error)
      if (!error.response) {
        if (error.message.includes('timeout')) {
          showToast('请求超时，请检查网络是否连接正常')
        } else {
          showToast('请求失败，请检查网络是否已连接')
        }
      }

      switch (error.response.status) {
        case 404:
          showToast('请求网络不存在')
          break;
        default:
          showToast('网络异常')
          break;
      }

      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getFixedConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }

  get(url, options = {}) {
    const instance = axios.create(this.getFixedConfig())
    this.interceptors(instance)
    return instance.get(url, options)
  }

  post(url, data, options = {}) {
    const instance = axios.create(this.getFixedConfig())
    this.interceptors(instance)
    return instance.post(url, data, options)
  }

}

export default Http