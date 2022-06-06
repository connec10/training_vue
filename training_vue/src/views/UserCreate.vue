<template>
  <div id="app">
    <div>Sending...</div>
    <div>新規ユーザー作成</div>
    <div>名前：<input type="text" v-model="inputName"></div>
    <div>説明文：<textarea name="" id="" cols="30" rows="10" v-model="inputDescription"></textarea></div>
    <div>エラーメッセージ</div>
    <button v-on:click="postUser()">送信</button>

    <!-- Test -->
    <div>inputName: {{ inputName }}</div>
    <div>inputDescription: {{ inputDescription }}</div>
  </div>
</template>

<script>
  import Api from '../../mock/Api.js'

  export default {
    data: function () {
      return {
        inputName: '',
        inputDescription: '',
      }
    },
    created: function () {
      this.postUser()
    },
    watch: { '$route': 'postUser' },
    methods: {
      postUser: function () {
        console.log('postUser')
        // Api.getUsers()
      },
    },
  }
</script>

<style>

</style>
