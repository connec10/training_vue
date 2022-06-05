<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      ログインしてください
    </p>
    <form @submit.prevent="login">
      <div class="input-area">
        <label>Email：</label>
        <input v-model="email" placeholder="email">
      </div>
      <div class="input-area">
        <label>Password：</label>
        <input v-model="pass" placeholder="password" type="password">        
      </div>
      <button type="submit">ログイン</button>
      <p v-if="error" class="error">ログインに失敗しました</p>
    </form>
  </div>
</template>

<script>
import Auth from '/mock/Auth.js'

export default {
  data: function () {
    return {
      email: 'vue@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login: function () {
      Auth.login(this.email, this.pass, function(loggedIn) {
        if (!loggedIn) {
          this.error = true
        } else {
          // redirectパラメータが付いている場合はそのパスに遷移
          this.$router.replace(this.$route.query.redirect || '/')
        }
      }.bind(this))
    }
  }
}
</script>
