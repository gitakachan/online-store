import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapJS from "bootstrap/dist/js/bootstrap.bundle.min.js";

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.component("Loading", Loading); //全域註冊
app.mount("#app");
