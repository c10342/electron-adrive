import { app, BrowserWindow } from "electron";
import { join } from "path";
import { electronApp, optimizer } from "@electron-toolkit/utils";
import createWindow from "./utils/createWindow";
import initJsbridge from "./utils/jsbridge";
import { WinNameEnum } from "@share/enum";
import initTray from "./utils/tray";
import { initStore } from "./utils/store";
// import initFloat from "./utils/float";

function createBrowserWindow(): void {
  createWindow("index", {
    preload: join(__dirname, "../preload/index.js"),
    autoHideMenuBar: true,
    frame: false,
    minWidth: 1000,
    minHeight: 700,
    winName: WinNameEnum.Main
  });
  createWindow("login", {
    preload: join(__dirname, "../preload/index.js"),
    autoHideMenuBar: false,
    frame: true,
    minWidth: 1000,
    minHeight: 700
  });
  // 悬浮窗
  // initFloat();
  initStore({ name: "43221313" });
  initJsbridge();
  initTray();
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createBrowserWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createBrowserWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
