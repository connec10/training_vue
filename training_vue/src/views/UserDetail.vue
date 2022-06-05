<template>
  <div>
    <h1>ユーザー詳細</h1>
    <div class="loading" v-if="loading">読み込み中…</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.description }}</p>
    </div>
  </div>
</template>

<script>
import Api from '/mock/Api.js'

export default {
  data: function () {
    return {
      loding: false,
      user: null,
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
      Api.getUser(this.$route.params.userId, function (err, user) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }.bind(this))
    }
  }
}

</script>