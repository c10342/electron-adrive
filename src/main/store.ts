import { GlobalEventEnum } from "@share/event";
import { BrowserWindow } from "electron";
import Store from "electron-store";

const store = new Store({
  name: "db",
  watch: true,
  schema: {
    count: {
      type: "number",
      default: 0
    }
  }
});

store.onDidChange("count", (newVal, oldVal) => {
  const allWins = BrowserWindow.getAllWindows();
  allWins.forEach((win) => {
    // 广播给所有窗口
    win.webContents.send(GlobalEventEnum.StoreChange, {
      key: "count",
      newVal,
      oldVal
    });
  });
});

export default store;
