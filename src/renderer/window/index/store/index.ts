import { createStore } from "vuex";
import modules from "./modules";
import { GlobalStoreData } from "../types/store";
import { logError } from "@share/log";
import { SystemModuleState } from "@share/type";

const store = createStore<GlobalStoreData>({
  modules
});

store.subscribe((mutation, state) => {
  if (mutation.type.startsWith("SystemModule")) {
    window.api.setStore({
      key: "SystemModule",
      value: { ...state.SystemModule }
    });
  }
});

window.api
  .getStore("SystemModule")
  .then((res: SystemModuleState | null) => {
    if (!res) {
      return;
    }
    store.replaceState({
      SystemModule: res,
      UserModule: { userInfo: null }
    });
  })
  .catch(logError);

export default store;
