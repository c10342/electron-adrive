import { EventEnum } from "@share/event";
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
  setWinAttr(options: SetWinAttrProps) {
    ipcRenderer.send(EventEnum.SetWinAttr, options);
  }
};
