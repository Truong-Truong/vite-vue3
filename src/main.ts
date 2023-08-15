import 'es6-promise/auto'; // Import polyfill es6-promise
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./style.css";
import App from "./App.vue";
import route from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import VueCookies from 'vue-cookies';
import 'vue3-toastify/dist/index.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
app.use(pinia)
app.use(route)
app.use(Vue3Toastify, {
  autoClose: 5000,
} as ToastContainerOptions)
app.use(VueCookies)

app.config.globalProperties.window = window

app.mount("#app");
