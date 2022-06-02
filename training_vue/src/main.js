import Vue from 'vue'
import Task from './Task.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Task)
}).$mount('#app')
