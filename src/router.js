import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Layout from './views/layout/layoutIndex.vue'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'selected',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/layout/home'
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        {
          name: 'home',
          path: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: 'news/',
          name: 'news',
          component: () => import('./views/news/News.vue')
        }
      ]
    }
  ]
})
