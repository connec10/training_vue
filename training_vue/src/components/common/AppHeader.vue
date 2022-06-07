<template>
  <div id="app-header">
    <div class="app-name">Task SFC</div>
    <nav v-cloak>
      <router-link to="/top">トップページ</router-link>
      <router-link to="/users">ユーザー一覧ページ</router-link>
      <router-link to="/user_create">新規ユーザー登録</router-link>
      <router-link v-show="!testLoginState" to="/login">ログイン</router-link>
      <router-link v-show="testLoginState" to="/top">ログアウト</router-link>
      <button v-on:click="checkLogin">check login</button>
      <button v-on:click="logout">logout</button>
      <button v-on:click="test">test</button>
    </nav>
  </div>
</template>

<script>
import Auth from '/mock/Auth.js'

export default {
  data: function () {
    return {
      Auth: Auth,
      testLoginState: true,
    }
  },
  watch: {loginState:'test'},
  methods: {
    test: function () {
      this.testLoginState = !this.testLoginState
    },
    checkLogin: function () {
      Auth.loggedIn()
    },
    logout: function () {
      Auth.logout()
      // ログアウトしました。トップページへ遷移します。
    },
  }
}
</script>

<style>
.app-name {
  background: #add8e6;
  padding: 20px 5px;
  color: #fff;
  font-size: 24px;
}

#app-header a {
  margin-right: 10px;
}

nav {
  margin-top: 10px;
  padding: 10px 5px;
  border-bottom: solid 1px #ccc;
}

</style>
