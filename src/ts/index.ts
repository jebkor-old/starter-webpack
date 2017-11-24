import Vue from 'vue';
import 'jquery';
import 'foundation-sites';

import FrontpageView from './vue/components/FrontpageView.vue';

let vm = new Vue({
    el: "#app",
    template: `
        <frontpage-view></frontpage-view>
    `,
    components: {
        FrontpageView
    }
})