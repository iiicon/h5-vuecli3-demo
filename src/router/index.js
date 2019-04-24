import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import NProgress from 'nprogress'

Vue.use(Router)
NProgress.configure({
  showSpinner: false
});

const router = new Router({
  mode: 'history',
  routes
})

let authToken

// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  if (!(to.name === 'mine' && from.name === 'home' || to.name === 'home' && from.name === 'mine')) {
    NProgress.start()
  }
  next()
  
  // if (to.matched.some(record => record.meta.requiresAuth)) {
    
  //   authToken = store.state.authToken === '' ? false: true 

  //   if (!authToken) {
  //     next({
  //       name: 'login',
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     })
  //   } else {
  //     next()
  //   }

  // } else {
  //   next()
  // }
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router