import Vue from "vue";
import VueRouter from "vue-router";

import FrontpageView from '../components/FrontpageView.vue';
import DrabbagleDemo from '../components/DraggableDemo.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: FrontpageView
        },
        {
            path: "/draggable-demo",
            component: DrabbagleDemo
        }
    ]
});
