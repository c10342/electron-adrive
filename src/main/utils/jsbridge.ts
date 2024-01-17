import { JsbridgeEnum } from "@share/event";
import {
  SetWinPositionParams,
  CommomParams,
  OpenUrlParams,
  ShowMessageBoxParams,
  GetPathType
} from "@share/type";
import { BrowserWindow, WebContents, app, dialog, ipcMain, shell } from "electron";
import { winNameMap } from "./createWindow";
import os from "os";

const getWin = (params: { name?: string; sender?: WebContents }) => {
  let win: BrowserWindow | null = null;
  if (params.name) {
    win = BrowserWindow.fromId(winNameMap[params.name]);
  } else if (params.sender) {
    win = BrowserWindow.fromWebContents(params.sender);
  }
  return win;
};

// jsbridge
const initJsbridge = () => {
  // 设置窗口位置
  ipcMain.on(JsbridgeEnum.SetWinPosition, (event, params: SetWinPositionParams) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (!win) {
      return;
    }

    win.setPosition(params.x, params.y);
  });
  // 获取窗口位置
  ipcMain.handle(JsbridgeEnum.GetWinPosition, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (!win) {
      return null;
    }
    const pos = win.getPosition();
    return {
      x: pos[0],
      y: pos[1]
    };
  });
  // 最小化窗口
  ipcMain.on(JsbridgeEnum.MinimizeWin, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win?.minimize();
  });
  // 最大化窗口
  ipcMain.on(JsbridgeEnum.MaximizeWin, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win?.maximize();
  });
  // 还原窗口
  ipcMain.on(JsbridgeEnum.UnmaximizeWin, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win?.unmaximize();
  });
  // 关闭窗口
  ipcMain.on(JsbridgeEnum.CloseWin, (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win?.close();
  });
  // 显示窗口
  ipcMain.on(JsbridgeEnum.ShowWin, (event, params?: CommomParams) => {
    const win = getWin({ name: params?.name, sender: event.sender });
    win?.show();
  });
  // 隐藏窗口
  ipcMain.on(JsbridgeEnum.HideWin, (event, params?: CommomParams) => {
    const win = getWin({ name: params?.name, sender: event.sender });
    win?.hide();
  });
  // 根据Url使用对应的软件打开
  ipcMain.on(JsbridgeEnum.OpenUrl, (_event, params: OpenUrlParams) => {
    shell.openExternal(params.url);
  });
  // 获取软件信息
  ipcMain.handle(JsbridgeEnum.GetEnvInfo, () => {
    return {
      versions: {
        ...process.versions
      },
      os: {
        arch: os.arch(),
        release: os.release(),
        name: process.env.OS
      }
    };
  });
  // 显示消息弹框
  ipcMain.handle(JsbridgeEnum.ShowMessageBox, (event, params: ShowMessageBoxParams) => {
    if (params.modal) {
      const win = BrowserWindow.fromWebContents(event.sender);
      if (win) {
        return dialog.showMessageBox(win, params);
      }
    }
    return dialog.showMessageBox(params);
  });
  // 获取相关路径
  ipcMain.handle(JsbridgeEnum.GetPath, (_event, type: GetPathType) => {
    return app.getPath(type);
  });
};

export default initJsbridge;
