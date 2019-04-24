import Index from '@/views/index/index.vue'
import Home from '@/views/home/home.vue'
import Mine from '@/views/mine/mine.vue'

export default [{
  path: '/',
  name: 'index',
  redirect: {
    name: 'home'
  },
  component: Index,
  children: [{
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
      title: 'xl'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta: {
      requiresAuth: true,
      title: '我的'
    }
  },
  ],
  // beforeEnter: (to, from, next) => {
  //   /**
  //    * 路由独享
  //    * 首次进入判断是否实名，如果没有则去实名
  //    */
  //   if (!from.name) {
  //     getRealNameInfo().then(res => {
  //       res = res.data
  //       if (res.flag) {
  //         if (res.data.info === null) { // 未实名
  //           next({
  //             name: 'realnameAuth'
  //           })
  //         } else {
  //           next()
  //         }
  //       } else {
  //         next()
  //       }
  //     })
  //   } else {
  //     next()
  //   }
  // }
},
// {
//   path: '*',
//   component: () => import('@/views/error/error-404.vue')
// }
]