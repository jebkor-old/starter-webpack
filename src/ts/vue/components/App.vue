<template>
  <div id="app" class="grid-container full">

    <br><br>

    <div v-if="enableRouter == true">
      <ul class="menu align-center">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>

      <router-view></router-view>
    </div>

    <div v-else>
      <frontpage-view></frontpage-view>
    </div>

  </div>
</template>





<script>
export default {
    name: "app",
    data() {
        return {
            enableRouter: true
        };
    },
    components: {
    }
};
</script>






<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;

    img {
        display: block;
        margin: 0 auto;
        width: 200px;
    }
}
</style>
