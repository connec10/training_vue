<template>
  <div id="side-bar">
    Menus
    <ul>
      <li v-for="menu in menuList" v-bind:key="menu.name"><router-link :to="`${menu.path}`">{{ menu.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'task-system-side-bar',
  props: {
    loginUser: {
      type: Object,
      required: true
    }
  },
  computed: {
    menuList: function () {
      var menu_list = []
      if (this.loginUser.contentTaskList === true) {
        menu_list.push({name: 'タスク一覧', path: '/task_list'})
      }
      if (this.loginUser.contentTaskCreate === true) {
        menu_list.push({name: 'タスク登録', path: '/task_create'})
      }
      if (this.loginUser.contentTaskDelete === true) {
        menu_list.push({name: 'タスク削除', path: '/task_delete'})
      }
      return menu_list
    }
  }
}
</script>

<style>
#side-bar {
  width: 20%;
  border-right: 1px solid #c1c1c1;
  min-height: 300px;
  float: left;
  margin: 10px 2px
}
</style>
