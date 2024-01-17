import { SystemThemeEnum } from "../utils/enum";
import { Commit, Dispatch, Getters } from "./storeType";

export interface UseStore {
  state: GlobalStoreData;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

export interface SystemModuleState {
  // 主题色
  theme: SystemThemeEnum;
  // 开机自动启动
  autoStart: boolean;
  // 开机启动后最小化窗口
  minStartupWin: boolean;
  // 有传输任务时电脑不休眠
  notSleep: boolean;
  // 本次传输完自动关机
  autoShutdown: boolean;
  // 文件下载位置
  downloadLocation: string;
  // 默认此路径为下载路径
  defaultLocation: boolean;
  // 启用多线程上传
  multiThreaded: boolean;
  // 传输状态
  transferStatus: boolean;
  // 系统消息
  systemMessages: boolean;
  // 传输完成消息提示音
  messageSound: boolean;
  // 自动更新
  autoUpdate: boolean;
}

export interface UserModuleState {
  userInfo: any;
}

// vuex所有state类型定义集成
export interface GlobalStoreData {
  SystemModule: SystemModuleState;
  UserModule: UserModuleState;
}
