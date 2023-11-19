import { EventEnum } from "@share/event";
import { BrowserWindow, ipcMain, shell } from "electron";
import icon from "../../resources/icon.png?asset";
import { createWindow } from "./hepler";
import { SetWinAttrProps } from "@share/type";

import { isUndef } from "@share/helper";

const initEvent = () => {
  ipcMain.on(EventEnum.Minimize, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win?.minimize();
  });
  ipcMain.on(EventEnum.Maximize, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win?.maximize();
  });
  ipcMain.on(EventEnum.Close, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win?.close();
  });
  ipcMain.on(EventEnum.OpenUrl, (_event, url: string) => {
    shell.openExternal(url);
  });
  ipcMain.on(EventEnum.OpenWindown, (_event, options: { url: string; title?: string }) => {
    createWindow(options.url, {
      maximizable: true,
      show: false,
      autoHideMenuBar: true,
      ...(process.platform === "linux" ? { icon } : {}),
      title: options.title
    });
  });
  ipcMain.on(EventEnum.SetWinAttr, (event, options: SetWinAttrProps) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (!win) {
      return;
    }
    if (!isUndef(options.resizable)) {
      win?.setResizable(options.resizable);
    }
    if (!isUndef(options.minSize)) {
      win?.setMinimumSize(options.minSize.width, options.minSize.height);
    }
    if (!isUndef(options.size)) {
      win?.setSize(options.size.width, options.size.height, options.size.animate);
    }
  });
};

export default initEvent;
