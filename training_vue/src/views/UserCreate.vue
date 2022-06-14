<template>
  <div id="app">
    <div v-show="isSending">Sending...</div>
    <h1>新規ユーザー作成</h1>
    <table>
      <tr>
        <td>名前：</td>
        <td><input type="text" v-model="inputName"/></td>
      </tr>
      <tr>
        <td>説明文：</td>
        <td><textarea cols="30" rows="10" v-model="inputDescription"></textarea></td>
      </tr>
    </table>
    <ul v-for="error in errors" :key="error">
      <li class="error_message">{{ error }}</li>
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
        this.createdUser = null
        this.errors = null

        var user = {
          id: null,
          name: this.inputName,
          description: this.inputDescription
        }

        Api.postUser(user, this.afterPostUser)
      },
      moveToUserDetail: function (userId) {
        this.$router.push({ name: 'userDetail', params: { userId: userId }})
      },
      afterPostUser: function (errors, user) {
        if (errors === null) {
          this.createdUser = user
        } else {
          this.errors = errors
        }

        if (this.createdUser !== null) {
          alert(this.messageCreateSuccess)
          this.moveToUserDetail(this.createdUser.id)
        }
        this.isSending = false
      }
    }
  }
</script>

<style>
.error_message {
  color: red;
}
</style>
