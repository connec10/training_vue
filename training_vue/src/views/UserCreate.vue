<template>
  <div>
    <div class="sending" v-if="sending">Sending…</div>
    <div>
      <h2>新規ユーザー作成</h2>
      <div class="input-area">
        <label>名前：</label>
        <input type="text" v-model="user.name">
      </div>
      <div class="input-area">
        <label>説明文：</label>
        <textarea v-model="user.description"></textarea>
      </div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div>
        <input type="button" v-on:click="createUser" value="送信">
      </div>
    </div>
  </div>
</template>

<script>
import Api from '/mock/Api.js'

export default {
  data: function () {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    }
  },
  methods: {
    defaultUser: function () {
      return {
        name: '',
        description: ''
      }
    },
    createUser: function () {
      this.sending = true
      Api.postUser(this.user, function (err, user) {
        this.sending = false
        this.user = this.defaultUser
        alert('新規ユーザーが登録されました')
        this.$router.push('/users')
      }.bind(this))
    }
  }
}
</script>

<style scoped>
label {
  display: inline-block;
  vertical-align: top;
  width: 80px;
}

.input-area {
  margin-bottom: 10px;
}

.input-area textarea {
  width: 300px;
  height: 100px;
}
</style>
