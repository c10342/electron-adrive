import "../assets/style/index.scss";
import { DefineComponent, createApp } from "vue";

const initApp = (App: DefineComponent<any, any, any>) => {
  const app = createApp(App).mount("#app");
  return app;
};

export default initApp;
