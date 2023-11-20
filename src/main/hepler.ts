import { is } from "@electron-toolkit/utils";
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
  const win = new BrowserWindow(options);
  win.on("ready-to-show", () => {
    if (actionOptions?.autoShow !== false) {
      win.show();
    }
  });
  const formatUrl = createPageUrl(url);
  if (formatUrl.startsWith("file")) {
    win.loadFile(formatUrl);
  } else {
    win.loadURL(formatUrl);
  }
  return win;
};
