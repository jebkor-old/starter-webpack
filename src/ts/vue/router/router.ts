import Vue from "vue";
import VueRouter from "vue-router";

import Contact from "../components/Contact.vue";
import FrontpageView from "../components/FrontpageView.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: FrontpageView
        },
        {
            path: "/contact",
            component: Contact
        }
    ]
});
