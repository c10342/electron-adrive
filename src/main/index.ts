import { app, BrowserWindow } from "electron";
import { join } from "path";
import { electronApp, optimizer } from "@electron-toolkit/utils";
import createWindow from "./utils/createWindow";
import initJsbridge from "./utils/jsbridge";
import { WinNameEnum } from "@share/enum";
import initTray from "./utils/tray";

function createBrowserWindow(): void {
  createWindow("index", {
    preload: join(__dirname, "../preload/index.js"),
    autoHideMenuBar: false,
    frame: false,
    minWidth: 1000,
    minHeight: 700,
    winName: WinNameEnum.Main
  });
  // createWindow("tray", {
  //   width: 200,
  //   height: 400,
  //   show: false,
  //   resizable: false,
  //   x: 928 - 190,
  //   y: 760 - 390,
  //   preload: join(__dirname, "../preload/index.js")
  //   // frame: false,
  //   // alwaysOnTop: true
  // });
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
