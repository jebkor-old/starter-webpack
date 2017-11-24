import Vue from 'vue';
import 'jquery';
import 'foundation-sites';

import App from './vue/components/App.vue';

let vm = new Vue({
    el: "#app",
    template: '<App/>',
    components: { App }
});