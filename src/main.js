import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const firebaseConfig = {
    apiKey: "AIzaSyB69vbVRe2g2is3SSRnCi7EDaNcfTbkRRY",
    authDomain: "examen-ernesto.firebaseapp.com",
    projectId: "examen-ernesto",
    storageBucket: "examen-ernesto.appspot.com",
    messagingSenderId: "246505405201",
    appId: "1:246505405201:web:a32f24586f8891d070eab0"
};

// src/plugins/vuetify.js


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

initializeApp(firebaseConfig);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,

    render: (h) => h(App)
}).$mount("#app");