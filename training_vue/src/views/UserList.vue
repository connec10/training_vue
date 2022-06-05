<template>
  <div>
    <h1>ユーザー一覧</h1>
    <div class="loading" v-if="loading">読み込み中…</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <table>
      <tr>
        <th>ID</th><th>名前</th><th>操作</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td><router-link :to="{ path: '/users/' + user.id }">詳細</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Api from '/mock/Api.js'

export default {
  data: function () {
    return {
      loding: false,
      users: function () {
        return []
      },
      error: null
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function () {
      this.loading = true
      Api.getUsers(function (err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }.bind(this))
    }
  }
}

</script>

<style>
th,td {
  padding: 3px;
}
</style>
