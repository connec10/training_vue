// ユーザーのMockデータ。本来はデータベースの情報をAPI経由で取得する
var userData = [
  {
    id: 1,
    name: 'Connect Taro',
    description: 'コネクト株式会社で働くエンジニアです。'
  },
  {
    id: 2,
    name: 'Connect Jiro',
    description: 'コネクト株式会社で働くエンジニアです。。'
  },
  {
    id: 3,
    name: 'Connect Hanako',
    description: 'コネクト株式会社で働くエンジニアです。。。'
  },
]

export default {
  getUsers: function (callback) {
    setTimeout(function () {
      callback(null, userData)
    }, 1000)
  },
  getUser: function (userId, callback) {
    setTimeout(function () {
      var filteredUsers = userData.filter(function (user) {
        return user.id === parseInt(userId, 10)
      })
      callback(null, filteredUsers && filteredUsers[0])
    })
  },
  postUser: function (params, callback) {
    setTimeout(function () {
      params.id = userData.length + 1
      userData.push(params)
      callback(null, params)
    }, 1000)
  }
}