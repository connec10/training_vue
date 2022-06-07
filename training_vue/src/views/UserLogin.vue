<template>
  <div id="app">
    <h1>Login</h1>
    <div>Email: <input type="text" placeholder="vue@example.com" v-model="inputEmail"></div>
    <div>Password: <input type="password" placeholder="password" v-model="inputPassword"></div>
    <button v-on:click="login()">ログイン</button>
    <div v-for="error in errors" :key="error">{{ error }}</div>
  </div>
</template>

<script>
import Api from '../../mock/Auth.js'

export default {
  data: function () {
    return {
      inputEmail: '',
      inputPassword: '',
      loginError: true,
      errors: [],
    }
  },
  methods: {
    login: function () {      
      this.errors = []
      var email = this.inputEmail
      var pass = this.inputPassword
      var cb = function (isLoginSuccess) {
        if (isLoginSuccess) {
          this.moveToTop()
        } else {
          this.errors.push('ログインに失敗しました')
        }
      }.bind(this)

      Api.login(email, pass, cb)
    },
    moveToTop: function () {
      this.$router.push('/top')
    }
  }
}
</script>

<style></style>
