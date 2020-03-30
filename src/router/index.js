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
      path: "/category",
      component: () => import("../pages/category/Category.vue"),
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
    },
    {
      path: "/address",
      component: () => import("../pages/mine/address.vue"),
      meta: {
        keepAlive: false // 是否缓存组件
      },
    },
    {
      path: "/addressEdit",
      component: () => import("../pages/mine/addressEdit.vue"),
      meta: {
        keepAlive: false // 是否缓存组件
      }
    },
    {
      path: "/noOrder",
      component: () => import("../pages/mine/noOrder.vue"),
      meta: {
        keepAlive: false // 是否缓存组件
      }
    },

  ]
})