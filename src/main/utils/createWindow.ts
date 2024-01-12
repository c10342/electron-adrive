// 创建窗口

import { shell, BrowserWindow } from "electron";
import { join } from "path";
import { is } from "@electron-toolkit/utils";
import { icon } from "../config/images";

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
}

const defaultOptions: WindowOptions = {
  width: 900,
  height: 670,
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

  if (!config.show && config.showReady) {
    win.on("ready-to-show", () => {
      win.show();
    });
  }

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
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
