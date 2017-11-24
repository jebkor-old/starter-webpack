<template>
  <div id="app">
    <img src="../../../images/vue-logo.svg" alt="vue-logo">
    <FrontpageView/>
  </div>
</template>

<script>
import FrontpageView from './FrontpageView.vue';

export default {
  name: 'app',
  components: {
    FrontpageView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img {
  width: 200px;
}
</style>
