import { SystemThemeEnum } from "../utils/enum";
import { Commit, Dispatch, Getters } from "./storeType";

export interface UseStore {
  state: GlobalStoreData;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

export interface SystemModuleState {
  theme: SystemThemeEnum;
}

export interface UserModuleState {
  userInfo: any;
}

// vuex所有state类型定义集成
export interface GlobalStoreData {
  SystemModule: SystemModuleState;
  UserModule: UserModuleState;
}
