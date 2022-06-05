<template>
  <div id="app-header">
    <div class="app-name">Task SFC</div>
    <nav v-cloak>
      <router-link to="/top">トップページ</router-link>
      <router-link to="/">ユーザー一覧ページ</router-link>
      <router-link to="/">新規ユーザー登録</router-link>
      <router-link to="/">ログイン</router-link>
      <router-link to="/">ログアウト</router-link>
    </nav>
  </div>
</template>

<script>
import Auth from '/mock/Auth.js'

export default {
  data: function () {
    return {
      Auth: Auth
    }
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