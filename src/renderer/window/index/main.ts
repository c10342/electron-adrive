import App from "./App.vue";
import initApp from "@renderer/utils/createApp";
import router from "./router";

initApp(App, [router]);
