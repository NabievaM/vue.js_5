import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/style.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import i18n from "./plugins/i18n";

const app = createApp(App);

app.use(store).use(router).use(i18n).use(Toast).mount("#app");
