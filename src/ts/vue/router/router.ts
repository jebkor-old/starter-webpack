import Vue from "vue";
import VueRouter from "vue-router";

import About from "../components/About.vue";
import FrontpageView from "../components/FrontpageView.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: FrontpageView
        },
        {
            path: "/about",
            component: About
        }
    ]
});
