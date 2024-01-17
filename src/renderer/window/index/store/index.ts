import { createStore } from "vuex";
import modules from "./modules";
import { GlobalStoreData, UseStore } from "../types/store";
import { logError } from "@share/log";

const store: UseStore = createStore<GlobalStoreData>({
  modules
});

window.api
  .getPath("downloads")
  .then((res) => {
    store.commit("SystemModule/updateByKey", {
      key: "downloadLocation",
      value: res
    });
  })
  .catch(logError);

export default store;
