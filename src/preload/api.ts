import { GlobalEventEnum, JsbridgeEnum } from "@share/event";
import {
  GetWinPositionRespond,
  SetWinPositionParams,
  CommomParams,
  OpenUrlParams,
  GetEnvInfoRespond,
  ShowMessageBoxParams,
  ShowMessageBoxRespond
} from "@share/type";
import { ipcRenderer } from "electron";

const api = {
  // 设置窗口位置
  [JsbridgeEnum.SetWinPosition](params: SetWinPositionParams) {
    ipcRenderer.send(JsbridgeEnum.SetWinPosition, params);
  },
  // 获取窗口位置
  [JsbridgeEnum.GetWinPosition](): Promise<GetWinPositionRespond> {
    return ipcRenderer.invoke(JsbridgeEnum.GetWinPosition);
  },
  // 最小化窗口
  [JsbridgeEnum.MinimizeWin]() {
    ipcRenderer.send(JsbridgeEnum.MinimizeWin);
  },
  //   关闭窗口
  [JsbridgeEnum.CloseWin]() {
    ipcRenderer.send(JsbridgeEnum.CloseWin);
  },
  // 最大化窗口
  [JsbridgeEnum.MaximizeWin]() {
    ipcRenderer.send(JsbridgeEnum.MaximizeWin);
  },
  // 最小化窗口
  [JsbridgeEnum.UnmaximizeWin]() {
    ipcRenderer.send(JsbridgeEnum.UnmaximizeWin);
  },
  // 显示窗口
  [JsbridgeEnum.ShowWin](params?: CommomParams) {
    ipcRenderer.send(JsbridgeEnum.ShowWin, params);
  },
  // 隐藏窗口
  [JsbridgeEnum.HideWin](params?: CommomParams) {
    ipcRenderer.send(JsbridgeEnum.HideWin, params);
  },
  // 根据Url使用对应的软件打开
  [JsbridgeEnum.OpenUrl](params: OpenUrlParams) {
    ipcRenderer.send(JsbridgeEnum.OpenUrl, params);
  },
  // 监听事件
  on(name: GlobalEventEnum, action: (...args: any) => any) {
    ipcRenderer.on(name, action);
  },
  // 移除事件
  off(name: GlobalEventEnum, action: (...args: any) => any) {
    ipcRenderer.removeListener(name, action);
  },
  // 获取软件信息
  [JsbridgeEnum.GetEnvInfo](): Promise<GetEnvInfoRespond> {
    return ipcRenderer.invoke(JsbridgeEnum.GetEnvInfo);
  },
  // 显示消息弹框
  [JsbridgeEnum.ShowMessageBox](params: ShowMessageBoxParams): Promise<ShowMessageBoxRespond> {
    return ipcRenderer.invoke(JsbridgeEnum.ShowMessageBox, params);
  }
};

export default api;
