import { app, BrowserWindow } from "electron";
import { join } from "path";
import { electronApp, optimizer } from "@electron-toolkit/utils";
import createWindow from "./utils/createWindow";
import initJsbridge from "./utils/jsbridge";
import { WinNameEnum } from "@share/enum";
// import initTray from "./utils/tray";
import { initStore } from "./utils/store";
import { initLog } from "./utils/log";
import initMonitor from "./utils/monitor";
// import initFloat from "./utils/float";

//   取消警告
//   Render process output: 2-%cElectron Security Warning (Insecure Content-Security-Policy) font-weight: bold; This renderer process has either no Content Security
//   Policy set or a policy with "unsafe-eval" enabled. This exposes users of
//   this app to unnecessary security risks.
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

function createBrowserWindow(): void {
  initLog();
  initMonitor();
  initStore({ name: "43221313" });
  initJsbridge();
  createWindow("index", {
    preload: join(__dirname, "../preload/index.js"),
    autoHideMenuBar: true,
    frame: false,
    minWidth: 1000,
    minHeight: 700,
    winName: WinNameEnum.Main
  });
  // createWindow("login", {
  //   preload: join(__dirname, "../preload/index.js"),
  //   autoHideMenuBar: false,
  //   frame: true,
  //   minWidth: 1000,
  //   minHeight: 700
  // });
  // 悬浮窗
  // initFloat();
  // initTray();
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
