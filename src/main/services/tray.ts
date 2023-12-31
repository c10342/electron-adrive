// 系统托盘
import { Tray } from "electron";
import { createWindow } from "./hepler";
import { icon } from "../const";

const initTray = () => {
  const win = createWindow(
    "tray.html",
    {
      width: 50,
      height: 100,
      show: false,
      resizable: false,
      frame: false,

      alwaysOnTop: true
    },
    { autoShow: false }
  );
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
