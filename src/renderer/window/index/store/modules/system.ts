import { SystemModuleState } from "@share/type";
import { getSystemModuleState } from "@share/helper";

const state: SystemModuleState = getSystemModuleState();

type StateKeys = keyof SystemModuleState;

const SystemModule = {
  namespaced: true,
  state,
  getters: {
    // todo
  },
  mutations: {
    updateByKey(
      state: SystemModuleState,
      options: {
        key: StateKeys;
        value: SystemModuleState[StateKeys];
      }
    ) {
      state[options.key as any] = options.value;
    }
  },
  actions: {
    // todo
  }
};

export default SystemModule;
