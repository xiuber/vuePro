import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/register'

Vue.use(Router);

export default new Router({
  mode:'history',//修改hash 模式
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    }
  ]
})
