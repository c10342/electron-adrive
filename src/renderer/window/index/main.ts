import App from "./App.vue";
import initApp from "@renderer/utils/createApp";
import router from "./router";
import store from "./store";

initApp(App, [router, store]);
