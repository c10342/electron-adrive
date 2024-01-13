// 系统托盘
import { Tray } from "electron";
import { icon } from "../config/images";
import createWindow from "./createWindow";
import { join } from "path";

const initTray = () => {
  const win = createWindow("tray", {
    preload: join(__dirname, "../preload/index.js"),
    width: 200,
    height: 400,
    show: false,
    resizable: false,
    frame: false,
    alwaysOnTop: true,
    showReady: false
  });
  win.on("blur", () => {
    win.hide();
  });
  //   不在任务栏显示任务
  win.setSkipTaskbar(true);
  const tray = new Tray(icon);
  tray.on("right-click", (_event, bounds) => {
    const info = win.getBounds();
    win.setPosition(bounds.x - (info.width - 10), bounds.y - (info.height - 10));
    win.show();
  });
};

export default initTray;
