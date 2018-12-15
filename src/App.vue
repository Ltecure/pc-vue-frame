<template>
  <div id="app">
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  #app {
    width: 1140px;
    min-height: 100vh;
    margin: 0 auto;
    /* overflow: hidden; */
  }
</style>
