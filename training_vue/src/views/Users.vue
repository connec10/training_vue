<template>
  <div id="app">
    <div>ユーザー一覧</div>
    <div>読み込み中…</div>
    <table>
      <thead>
        <tr>
          <th>ID</th><th>名前</th><th>操作</th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr v-for="user in users" v-bind:key="id">
          <td>{{ user.id }}</td><td>{{ user.name }}</td><td>詳細</td>
        </tr>
      </tbody> -->
    </table>
  </div>
</template>

<script>
import Api from '../../mock/Api.js'
export default {
  data: function () {
    return {
      users: Api.getUsers
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: { '$route': 'fetchData' },
  methods: {
    fetchData: function () {
      // APIを実行して、this.hogeにデータを設定する
    }
  }
}
</script>

<style>

</style>
