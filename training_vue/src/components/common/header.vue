<template>
  <div id="header">
    <div id="system-name">Task Vue Component</div>
    <div id="select-account">
      アカウント:
      <select v-model="currentUserId">
        <option v-for="user in users" v-bind:value="user.userId">
          {{ user.name }}
        </option>
      </select>
      <button @click="userChange()">変更する</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'task-system-header',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentUserId: null
    }
  },
  methods: {
    userChange: function () {
      this.$emit('user-change', this.currentUserId)
    }
  }
}
</script>

<style>
#header {
  width: 90%;
  height: 60px;
  background-color: #add8e6;
  color: #fff;
  padding: 10px 20px;
}

#system-name {
  font-size: 24px;
  float: left;
}

#select-account {
  float: right;
  padding-top: 30px;
  padding-right: 20px;
}

select {
  height: 28px;
  width: 180px;
}

</style>
