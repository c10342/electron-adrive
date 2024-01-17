import { createStore } from "vuex";
import modules from "./modules";
import { GlobalStoreData, UseStore } from "../types/store";
// import { logError } from "@share/log";
// import { SystemModuleState } from "@share/type";

export const store: UseStore = createStore<GlobalStoreData>({
  modules
});

export const initStoreState = async () => {
  const SystemModule = await window.api.getStore("SystemModule");
  if (SystemModule) {
    // 由于是异步的，所以如果页面先出现，会导致原来使用的数据失去响应式
    store.replaceState({
      SystemModule: { ...SystemModule },
      UserModule: { userInfo: null }
    });
  }
  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith("SystemModule")) {
      window.api.setStore({
        key: "SystemModule",
        value: { ...state.SystemModule }
      });
    }
  });
};
