import { isNull, isUndefined } from "lodash-es";
import { SystemThemeEnum } from "./enum";
import { SystemModuleState } from "./type";

export const isUndef = (data: any): data is undefined | null => {
  return isUndefined(data) || isNull(data);
};

export const getSystemModuleState = () => {
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
  return state;
};
