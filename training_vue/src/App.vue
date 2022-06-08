<template>
  <div id="app">
    <AppSystemHeader v-bind:login="isLoggedIn" v-on:update-login="updateLoginState"></AppSystemHeader>
    <div id="main-content">
      <router-view v-on:update-login="updateLoginState"></router-view>
    </div>
  </div>
</template>

<script>
import AppSystemHeader from './components/common/AppHeader.vue'
import Auth from '../mock/Auth.js'

export default {
  components: {
    AppSystemHeader,
  },
  data: function () {
    return {
      isLoggedIn: Auth.loggedIn()
    }
  },
  methods: {
    updateLoginState: function (state) {
      this.isLoggedIn = state
    }
  }
}
</script>

<style>
#main-content {
  padding: 5px;
}
</style>
