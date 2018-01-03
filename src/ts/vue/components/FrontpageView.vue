<template>
    <div class="grid-x">
        <div class="small-6 small-offset-3 cell text-center">
            <img src="../../../images/vue-logo.svg" alt="vue-logo">

            <h1>Welcome to my starter-webpack project!</h1>
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "frontpage-view",
  data() {
    return {
      message: "Hello this is a message"
    };
  },
  methods: {
    sayHello() {
      console.log("Hello from the FrontpageView.vue file");
    }
  },
  components: {},
  mounted() {
    this.sayHello();
  }
};
</script>



<style lang="scss" scoped>
#app img {
  width: 200px;
  img {
    display: block;
    margin: 0 auto;
    width: 200px;
  }
}
</style>