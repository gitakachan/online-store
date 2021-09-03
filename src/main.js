import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapJS from "bootstrap/dist/js/bootstrap.bundle.min.js";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
