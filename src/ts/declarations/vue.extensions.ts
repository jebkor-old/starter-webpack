import Vue from "vue";

// declare module "vue/types/options" {
//     interface ComponentOptions<V extends Vue> {
//         validations?: {}
//     }
// }


declare module "vue/types/vue" {
    interface VueConstructor {
        $staticEmit?: (vnode, name, data) => void;
    }
}




// vue.use(Vuelidate.default);