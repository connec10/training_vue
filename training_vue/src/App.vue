<template>
  <div id="app">
    <AppSystemHeader></AppSystemHeader>
    <div id="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppSystemHeader from './components/common/AppHeader.vue'

export default {
  components: {
    AppSystemHeader,
  }
}
</script>

<style>
#main-content {
  padding: 5px;
}
</style>
