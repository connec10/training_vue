<template>
  <div id="app">
    <div>ユーザー詳細</div>
    <div>{{ user.name }}</div>
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