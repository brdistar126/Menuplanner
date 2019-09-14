<template>
  <div id="app">
    <main-view></main-view>
  </div>
</template>

<script>
import MainView from './views/MainView'
export default {
  name: 'app',
  components: {
    MainView
  }
}
</script>

<style lang="scss">
  #app {
    padding: 2em;
  }
</style>
