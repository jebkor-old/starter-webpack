<template>
    <div>
        <h1>Welcome to my starter-webpack project!</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: "frontpage-view",
        data() {
            return {
                message: "Hello this is a message"
            }
        },
        methods: {
            sayHello() {
                console.log("Hello from the FrontpageView.vue file");
            }
        },
        components: {

        },
        mounted() {
            this.sayHello();
        }
    }
</script>



<style lang="scss" scoped>

</style>
