const getters = {
  appVersion(state) {
    return `${state.appName} V.1.5`
  },
  authToken(state) {
    return state.authToken
  },
  mobile(state) {
    return state.mobile
  }
}

export default getters