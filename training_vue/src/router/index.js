import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '/mock/Auth.js'

Vue.use(VueRouter)

const routes = [
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
    path: '/users',
    component: () => import('../views/UserList.vue')
  },
  {
    path: '/users/new',
    component: () => import('../views/UserCreate.vue')
  },
  {
    path: '/users/:userId',
    component: () => import('../views/UserDetail.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    beforeEnter: function (to, from, next) {
      Auth.logout()
      alert('ログアウトしました。Topへ戻ります')
      next('/')
    }
  },
  {
    path: '*',
    redirect: '/top'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
