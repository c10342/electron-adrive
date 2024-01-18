import { join } from "path";
import createWindow from "./createWindow";
import { screen } from "electron";

const initFloat = () => {
  const win = createWindow("float", {
    preload: join(__dirname, "../preload/index.js"),
    autoHideMenuBar: true,
    frame: false,
    height: 400,
    width: 400,
    resizable: false,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    showReady: false,
    // 设置透明窗口
    transparent: true
  });
  //通过获取用户屏幕的宽高来设置悬浮球的初始位置
  const left = screen.getPrimaryDisplay().workAreaSize.width - 400;
  //   const top = screen.getPrimaryDisplay().workAreaSize.height - 400;
  win.setPosition(left, 100); //设置悬浮球位置
  // 设置窗口点击穿透
  win.setIgnoreMouseEvents(true, { forward: true });
  win.on("ready-to-show", () => {
    // 显示窗口，但不获取焦点
    win.showInactive();
    // win.webContents.openDevTools();
  });
};

export default initFloat;
