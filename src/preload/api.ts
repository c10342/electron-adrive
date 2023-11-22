import { EventEnum, GlobalEventEnum } from "@share/event";
import { SetWinAttrProps } from "@share/type";
import { ipcRenderer } from "electron";

export const api = {
  // 最小化窗口
  minimizeWindow() {
    ipcRenderer.send(EventEnum.Minimize);
  },
  //   关闭窗口
  closeWindown() {
    ipcRenderer.send(EventEnum.Close);
  },
  //   根据url打开文件
  openUrl(url: string) {
    ipcRenderer.send(EventEnum.OpenUrl, url);
  },
  openWindown(options: { url: string; title?: string }) {
    ipcRenderer.send(EventEnum.OpenWindown, options);
  },
  maximizeWindown() {
    ipcRenderer.send(EventEnum.Maximize);
  },
  unmaximizeWindown() {
    ipcRenderer.send(EventEnum.Unmaximize);
  },
  setWinAttr(options: SetWinAttrProps) {
    ipcRenderer.send(EventEnum.SetWinAttr, options);
  },
  on(name: GlobalEventEnum, action: (...args: any) => any) {
    ipcRenderer.on(name, action);
  },
  off(name: GlobalEventEnum, action: (...args: any) => any) {
    ipcRenderer.removeListener(name, action);
  },
  getStore(key: string) {
    return ipcRenderer.invoke(EventEnum.GetStore, key);
  },
  setStore(key: string, value: any) {
    ipcRenderer.send(EventEnum.SetStore, key, value);
  },
  deleteStore(key: string) {
    return ipcRenderer.send(EventEnum.DeleteStore, key);
  }
};
