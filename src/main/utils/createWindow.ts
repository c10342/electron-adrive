// 创建窗口

import { shell, BrowserWindow } from "electron";
import { join } from "path";
import { is } from "@electron-toolkit/utils";
import { icon } from "../config/images";
import { GlobalEventEnum } from "@share/event";

interface WindowOptions {
  width?: number;
  height?: number;
  show?: boolean;
  autoHideMenuBar?: boolean;
  preload?: string;
  icon?: string;
  showReady?: boolean;
  resizable?: boolean;
  frame?: boolean;
  alwaysOnTop?: boolean;
  minHeight?: number;
  minWidth?: number;
  x?: number;
  y?: number;
  winName?: string;
}

export const winNameMap: Record<string, number> = {};

const defaultOptions: WindowOptions = {
  width: 1000,
  height: 700,
  show: false,
  autoHideMenuBar: true,
  ...(process.platform === "linux" ? { icon } : {}),
  showReady: true
};

const createWindow = (winName: string, options?: WindowOptions) => {
  const config = {
    ...defaultOptions,
    ...(options ?? {})
  };
  const win = new BrowserWindow({
    ...config,
    webPreferences: {
      preload: config.preload,
      sandbox: false
    }
  });
  if (options?.winName) {
    winNameMap[options.winName] = win.id;
  }

  if (!config.show && config.showReady) {
    win.on("ready-to-show", () => {
      win.show();
    });
  }
  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });
  win.on("maximize", () => {
    win.webContents.send(GlobalEventEnum.Maximize);
  });
  win.on("minimize", () => {
    win.webContents.send(GlobalEventEnum.Minimize);
  });
  win.on("unmaximize", () => {
    win.webContents.send(GlobalEventEnum.Unmaximize);
  });

  const devIp = process.env["ELECTRON_RENDERER_URL"];
  if (is.dev && devIp) {
    win.loadURL(`${devIp}/window/${winName}/index.html`);
  } else {
    win.loadFile(join(__dirname, `../renderer/window/${winName}/index.html`));
  }
  return win;
};

export default createWindow;
