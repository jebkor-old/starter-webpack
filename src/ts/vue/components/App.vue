<template>
  <div id="app">
    <img src="../../../images/vue-logo.svg" alt="vue-logo">

    <br><br>

    <div v-if="enableRouter == true">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-view></router-view>
    </div>

    <div v-else>
      <frontpage-view></frontpage-view>
    </div>

  </div>
</template>

<script>
import FrontpageView from "./FrontpageView";

export default {
    name: "app",
    data() {
      return {
        enableRouter: true
      }
    },
    components: {
      FrontpageView
    }
};
</script>





<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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
