<template>
  <div id="app">
    <div v-show="isSending">Sending...</div>
    <div>新規ユーザー作成</div>
    <div>名前：<input type="text" v-model="inputName"></div>
    <div>説明文：<textarea cols="30" rows="10" v-model="inputDescription"></textarea></div>
    <ul v-for="error in errors" :key="error">
      <li>{{ error }}</li>
    </ul>
    <button v-on:click="postUser()">送信</button>
  </div>
</template>

<script>
  import Api from '../../mock/Api.js'

  export default {
    data: function () {
      return {
        inputName: '',
        inputDescription: '',
        createdUser: {},
        messageCreateSuccess: '新規ユーザー登録されました',
        isSending: false,
        errors: [],
      }
    },
    methods: {
      postUser: function () {
        this.isSending = true
        this.createdUser = {}
        this.errors = []

        var user = {
          id: null,
          name: this.inputName,
          description: this.inputDescription
        }
        var afterPostUser = function (errors, user) {
          if (errors === null) {
            this.createdUser = user
          } else {
            this.errors = errors
          }
          
          if (JSON.stringify(this.createdUser) !== JSON.stringify({})) {
            alert(this.messageCreateSuccess)
            this.moveToUserDetail(this.createdUser.id)
          }
          this.isSending = false
        }.bind(this)

        Api.postUser(user, afterPostUser)
      },
      moveToUserDetail: function (userId) {
        this.$router.push({ name: 'userDetail', params: { userId: userId }})
      },
    },
  }
</script>

<style>

</style>
