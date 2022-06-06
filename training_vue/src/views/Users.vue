<template>
  <div id="app">
    <div>ユーザー一覧</div>
    <div v-show="isUserDataLoading">読み込み中…</div>
    <table>
      <thead>
        <tr>
          <th>ID</th><th>名前</th><th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <td>{{ user.id }}</td><td>{{ user.name }}</td><td>詳細</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Api from '../../mock/Api.js'

  export default {
    data: function () {
      return {
        users: [],
        isUserDataLoading: false,
      }
    },
    created: function () {
      this.getUsers()
    },
    watch: { '$route': 'getUsers' },
    methods: {
      getUsers: function () {
        this.isUserDataLoading = true
        Api.getUsers(function (err, users) {
          this.users = users
        }.bind(this))
        this.isUserDataLoading = false
      }
    },
  }
</script>

<style>
</style>
