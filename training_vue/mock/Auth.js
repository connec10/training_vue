export default {
  login: function (email, pass, cb) {
    // ダミーデータを使った擬似ログイン
    setTimeout(function () {
      if (email === 'vue@example.com' && pass === 'vue') {
        // ログイン成功時はローカルストレージにtokenを保持する
        localStorage.token = Math.random().toString(36).substring(7)
        if (cb) { cb(true) }
      } else {
        if (cb) { cb(false) }
      }
    }, 0)
  },

  logout: function () {
    delete localStorage.token
  },

  loggedIn: function () {
    console.log(localStorage)
    return !!localStorage.token
  }
}
