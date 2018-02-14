<template>
  <div id="app" class="grid-container full">
    

    <br><br>

    <div v-if="enableRouter == true">
      <ul class="menu align-center">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/draggable-demo">Draggable Demo</router-link>
        </li>
      </ul>

      <hr>

      <img src="../../../images/vue-logo.svg" alt="vue-logo">


      <router-view></router-view>
    </div>

    <div v-else>
      <frontpage-view></frontpage-view>
    </div>

  </div>
</template>





<script lang="ts">
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