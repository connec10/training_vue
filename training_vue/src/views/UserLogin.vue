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
import Auth from '../../mock/Auth.js'

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

      Auth.login(email, pass, this.cb)
    },
    cb: function (isLoginSuccess) {
      if (isLoginSuccess) {
        this.$emit('update-login', true)
        this.$router.push('/top')
      } else {
        this.$emit('update-login', false)
        this.errors.push('ログインに失敗しました')
      }
    }
  }
}
</script>

<style></style>
