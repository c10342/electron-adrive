import App from "./App.vue";
import initApp from "@renderer/utils/createApp";
import router from "./router";
import { initStoreState, store } from "./store";

const render = async () => {
  await initStoreState();
  initApp(App, [router, store]);
};

render();
