import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createPersistedstate from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// const vuexStorageOptions = { storage: window.sessionStorage }

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,

  // 在开发环境打开严格模式，虽然还是可以被修改，但是会在控制台报错
  strict: debug,

  // 使用插件存储 vuex 数据到 storage, 同时要在开发环境打开 logger
  plugins: debug ? [createLogger(), createPersistedstate()] : [createPersistedstate()]
})

export default store
