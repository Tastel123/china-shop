import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: "/",
      component: () => import("../pages/home/Home.vue"),
      meta: {
        keepAlive: true // 是否缓存组件
      }
    },
    {
      path: "/find",
      component: () => import("../pages/find/Find.vue"),              
      meta: {
        keepAlive: true // 是否缓存组件
      }
    },
    {
      path: "/cart",
      component: () => import("../pages/cart/Cart.vue"),
      meta: {
        keepAlive: false // 是否缓存组件
      }
    },
    {
      path: "/mine",
      component: () => import("../pages/mine/Mine.vue"),
      meta: {
        keepAlive: false // 是否缓存组件
      }
    },
    {
      path: "/search",
      component: () => import("../pages/search/Search.vue"),
      meta: {
        keepAlive: false // 是否缓存组件
      }
    }
  
  ]
})