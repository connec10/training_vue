import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '/mock/Auth.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => ''
  },
  {
    path: '/task_list',
    name: 'task_list',
    component: () => import('../views/TaskList.vue')
  },
  {
    path: '/task_create',
    name: 'task_create',
    component: () => import('../views/TaskCreate.vue')
  },
  {
    path: '/task_delete',
    name: 'task_delete',
    component: () => import('../views/TaskDelete.vue')
  },
  {
    path: '/top',
    component: () => import('../views/Top.vue')
  },
  {
    path: '/logout',
    beforeEnter: function (to, from, next) {
      Auth.logout()
    }
  },
  {
    path: '*',
    redirect: '/top'
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/users/:userId',
    name: 'userDetail',
    component: () => import('../views/UserDetail.vue')
  },
  {
    path: '/user_create',
    name: 'userCreate',
    component: () => import('../views/UserCreate.vue'),
    beforeEnter: function (to, from, next) {
      if (Auth.loggedIn() === false) {
        next({ name: 'userLogin' })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'userLogin',
    component: () => import('../views/UserLogin.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
