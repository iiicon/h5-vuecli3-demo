import Vue from 'vue'
import '@/assets/js/icon'
import './cube-ui'
import App from './App.vue'
import 'nprogress/nprogress.css'
import router from './router'
import store from './store'
import { methods } from './lib/mixin'
import vConsole from 'vconsole'
let vconsole = process.env.NODE_ENV === 'development'?new vConsole():null
export default vconsole

Vue.config.productionTip = false
console.log(process.env.BASE_URL)
console.log(process.env.VUE_APP_API_URL)
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_CURRENTMODE)

Vue.mixin({
  methods
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
