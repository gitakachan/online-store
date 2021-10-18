import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import axios from "axios";
import VueAxios from "vue-axios";

import VCalendar from "v-calendar";

import "bootstrap-icons/font/bootstrap-icons.css";

import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, regex, between, max } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

defineRule("required", required);
defineRule("email", email);
defineRule("regex", regex);
defineRule("between", between);
defineRule("max", max);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
});
setLocale("zh_TW");

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(VCalendar, {});
app.component("Loading", Loading); // 全域註冊
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
