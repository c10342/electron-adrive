import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export const createWindow = (url: string, options?: BrowserWindowConstructorOptions) => {
  const win = new BrowserWindow(options);
  win.on("ready-to-show", () => {
    win.show();
  });
  if (url.startsWith("file")) {
    win.loadFile(url);
  } else {
    win.loadURL(url);
  }
  return win;
};
