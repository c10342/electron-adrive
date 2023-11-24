import { is } from "@electron-toolkit/utils";
import { GlobalEventEnum } from "@share/event";
import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";
import path from "path";

const createPageUrl = (html: string) => {
  const baseUrl =
    is.dev && process.env["ELECTRON_RENDERER_URL"]
      ? process.env["ELECTRON_RENDERER_URL"]
      : path.join(__dirname, "../renderer");
  return `${baseUrl}/${html}`;
};

export const createWindow = (
  url: string,
  options?: BrowserWindowConstructorOptions,
  actionOptions?: { autoShow?: boolean }
) => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    },
    ...options
  });
  win.on("ready-to-show", () => {
    if (actionOptions?.autoShow !== false) {
      win.show();
    }
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
  const formatUrl = createPageUrl(url);
  if (formatUrl.startsWith("file")) {
    win.loadFile(formatUrl);
  } else {
    win.loadURL(formatUrl);
  }
  return win;
};

export const parJsonToString = (data: any) => {
  try {
    return JSON.stringify(data);
  } catch (error) {
    return "";
  }
};
