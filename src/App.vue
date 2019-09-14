<template>
  <div>
  <Header />
  <div id="app">
    <main-view></main-view>
  </div>
  </div>
</template>

<script>
import MainView from './views/MainView'
import Header from './views/components/Header/Header'
export default {
  name: 'app',
  components: {
    MainView,
    Header
  }
}
</script>

<style lang="scss">
  body{
    margin: 0 !important;
  }
  #app {
    padding: 50px 2em 2em;
  }
</style>
