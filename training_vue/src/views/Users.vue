<template>
  <div id="app">
    <h1>ユーザー一覧</h1>
    <div v-show="isUserDataLoading">読み込み中…</div>
    <table>
      <thead>
        <tr>
          <th>ID</th><th>名前</th><th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td><router-link :to="{ name: 'userDetail', params: { userId: user.id }}">詳細</router-link></td>
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
    methods: {
      getUsers: function () {
        this.isUserDataLoading = true
        Api.getUsers(function (p, users) {
          this.users = users
          this.isUserDataLoading = false
        }.bind(this))
      },
    },
  }
</script>

<style>
</style>
