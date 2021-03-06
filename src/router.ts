import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: 'about' */ './views/NewDetail.vue'),
      component: () => import(/* webpackChunkName: 'about' */ './views/New.vue')
    },
    {
      path: '/new/detail',
      name: 'detail',
      component: () => import('./views/NewDetail.vue')
    },
    {
      path: '/solution',
      name: 'solution',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: 'about' */ './views/Solution.vue')
    },
    {
      path: '/case',
      name: 'case',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: 'about' */ './views/Case.vue')
    }
  ]
})
