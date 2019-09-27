import Vue from 'vue'
import Router from 'vue-router'
import login from '../src/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component:login
    }
  ]
})
