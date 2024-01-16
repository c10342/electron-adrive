import { SystemModuleState } from "../../types/store";
import { SystemThemeEnum } from "../../utils/enum";

const state: SystemModuleState = {
  theme: SystemThemeEnum.System
};

type StateKeys = keyof SystemModuleState;

const SystemModule = {
  namespaced: true,
  state,
  getters: {
    // todo
  },
  mutations: {
    setTheme(state: SystemModuleState, value: SystemThemeEnum) {
      state.theme = value;
    },
    updateByKey(
      state: SystemModuleState,
      options: {
        key: StateKeys;
        value: SystemModuleState[StateKeys];
      }
    ) {
      state[options.key] = options.value;
    }
  },
  actions: {
    // todo
  }
};

export default SystemModule;
