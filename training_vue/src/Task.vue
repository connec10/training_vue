<template>
  <div id="app">
    <taskSystemHeader v-bind:users="users" v-on:user-change="setLoginUser($event)"></taskSystemHeader>
    <taskSystemSideBar v-bind:login-user="loginUser"></taskSystemSideBar>
    <router-view/>
    <taskSystemFooter></taskSystemFooter>
  </div>
</template>

<script>
import taskSystemHeader from './components/common/header.vue'
import taskSystemSideBar from './components/common/side_bar.vue'
import taskSystemFooter from './components/common/footer.vue'

export default {
  components: {
    taskSystemHeader,
    taskSystemSideBar,
    taskSystemFooter
  },
  data () {
    return {
      users: [
        {
          userId: 1234,
          name: 'testA',
          contentTaskList: true,
          contentTaskCreate: true,
          contentTaskDelete: true
        },
        {
          userId: 5678,
          name: 'testB',
          contentTaskList: true,
          contentTaskCreate: true,
          contentTaskDelete: false
        },
        {
          userId: 1111,
          name: 'testC',
          contentTaskList: true,
          contentTaskCreate: false,
          contentTaskDelete: false
        }
      ],
      loginUser: {}
    }
  },
  methods: {
    setLoginUser: function (userId) {
      this.loginUser = this.users.filter(function (user) {
        return user.userId == userId
      })[0]
    }
  }
}
</script>
