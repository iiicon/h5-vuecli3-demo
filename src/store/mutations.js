const mutations = {
  UPGRADE_VERSION(state) {
    state.appInfo = `${state.appName} V.1.5` + Math.random(5)
  },
  SET_APP_NAME(state, params) {
    state.appName = params
  },
  CLEAR_TOKEN(state) {
    state.authToken = ''
  },
  SET_TOKEN(state, token) {
    state.authToken = token
  },
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token
  },
  SET_MOBILE(state, mobile) {
    state.mobile = mobile
  },
  SET_REALNAME_AUTH(state, status) {
    state.realnameAuth = status
  }
}

export default mutations