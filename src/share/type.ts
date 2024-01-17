import { MessageBoxOptions } from "electron";
import { SystemThemeEnum } from "./enum";

export interface CommomParams {
  name?: string;
}

export interface SetWinPositionParams {
  x: number;
  y: number;
}

export type GetWinPositionRespond = {
  x: number;
  y: number;
} | null;

export interface OpenUrlParams {
  url: string;
}

export interface GetEnvInfoRespond {
  versions: {
    node: string;
    v8: string;
    uv: string;
    zlib: string;
    brotli: string;
    ares: string;
    modules: string;
    nghttp2: string;
    napi: string;
    llhttp: string;
    uvwasi: string;
    acorn: string;
    simdutf: string;
    undici: string;
    openssl: string;
    cldr: string;
    icu: string;
    tz: string;
    unicode: string;
    electron: string;
    chrome: string;
  };
  os: {
    arch: string;
    release: string;
    name: string;
  };
}

export interface ShowMessageBoxParams extends MessageBoxOptions {
  // 参数允许该对话框将自身附加到父窗口, 作为父窗口的模态框
  modal?: boolean;
}

export interface ShowMessageBoxRespond {
  // 点击的按钮的索引。
  response: number;
  // 如果设置了 checkboxLabel，返回复选框是否被选中的状态。 否则，返回 false。
  checkboxChecked: boolean;
}

export type GetPathType =
  | "home"
  | "appData"
  | "userData"
  | "sessionData"
  | "temp"
  | "exe"
  | "module"
  | "desktop"
  | "documents"
  | "downloads"
  | "music"
  | "pictures"
  | "videos"
  | "recent"
  | "logs"
  | "crashDumps";

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
