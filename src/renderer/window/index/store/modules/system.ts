import { SystemModuleState } from "../../types/store";
import { SystemThemeEnum } from "../../utils/enum";

const state: SystemModuleState = {
  theme: SystemThemeEnum.System,
  autoStart: false,
  minStartupWin: false,
  notSleep: false,
  autoShutdown: false,
  downloadLocation: "",
  defaultLocation: false,
  multiThreaded: false,
  transferStatus: false,
  systemMessages: false,
  messageSound: false,
  autoUpdate: false
};

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
