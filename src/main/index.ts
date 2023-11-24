import { app, shell, BrowserWindow } from "electron";
import { join } from "path";
import { electronApp, optimizer } from "@electron-toolkit/utils";
import initEvent from "./services/event";
import { createWindow } from "./services/hepler";
// import initTray from "./tray";
import { initLog, logInfo } from "./services/log";
import { icon } from "./const";
import User from "./db/User";

function createMainWindow(): void {
  const mainWindow = createWindow("index.html", {
    width: 490,
    height: 680,
    show: false,
    autoHideMenuBar: false,
    resizable: false,
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });
  logInfo(app.getPath("appData"));
  initEvent();
  // initTray();
  initLog();
  User.create({ name: "张三", age: 14 });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId("com.electron");

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createMainWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
