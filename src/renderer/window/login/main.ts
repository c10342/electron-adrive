import App from "./App.vue";
import initApp from "@renderer/utils/createApp";
import { initStoreState, store } from "./store";

const render = async () => {
  await initStoreState();
  initApp(App, [store]);
};

render();
