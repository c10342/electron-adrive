import { createStore } from "vuex";
import modules from "./modules";
import { GlobalEventEnum } from "@share/event";

export const store = createStore<any>({
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
  window.api.on(GlobalEventEnum.StateChange, (_options, data) => {
    if (data.key === "SystemModule") {
      Object.keys(data.value).forEach((key) => {
        store.commit("SystemModule/syncState", {
          key: key as any,
          value: data.value[key]
        });
      });
    }
  });
};
