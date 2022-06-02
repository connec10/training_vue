import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
