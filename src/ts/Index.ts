import Vue from "vue";
import "jquery";
import "foundation-sites";

import App from "./vue/components/App.vue";

// in case you want to use router
import router from "./vue/router/router";

let vm = new Vue({
    el: "#app",
    template: "<App/>",
    components: { App },
    router
});
