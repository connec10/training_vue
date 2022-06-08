<template>
  <div id="app">
    <h1>ユーザー詳細</h1>
    <h2>{{ user.name }}</h2>
    <div>{{ user.description }}</div>
  </div>
</template>

<script>
  import Api from '../../mock/Api.js'

  export default {
    data: function () {
      return {
        user: {},
      }
    },
    created: function () {
      this.getUser()
    },
    watch: { '$route': 'getUser' },
    methods: {
      getUser: function () {
        var userId = this.$route.params.userId
        Api.getUser(userId, function (p, user) {
          this.user = user
        }.bind(this))
      },
    },
  }
</script>

<style>

</style>