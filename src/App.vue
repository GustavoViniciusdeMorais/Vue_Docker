<template>
  <div id="app">
    <list></list>
  </div>
</template>

<script>
// import list from './components/common/list'
import list from './components/xproducts/list'

export default {
  name: 'App',
  components: {
    list
  }
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
