import { GlobalEventEnum } from "@share/event";
import { getSystemModuleState } from "@share/helper";
import { SystemModuleState } from "@share/type";
import { BrowserWindow, app } from "electron";
import Store from "electron-store";

export let store: Store<{ SystemModule: SystemModuleState }> | null = null;

export const initStore = (params: { name: string }) => {
  store = new Store<{ SystemModule: SystemModuleState }>({
    name: params.name,
    watch: false,
    schema: {
      SystemModule: {
        type: "object",
        default: getSystemModuleState({ downloadLocation: app.getPath("downloads") })
      }
    }
  });
  store.onDidChange("SystemModule", (value) => {
    const wins = BrowserWindow.getAllWindows();
    wins.forEach((win) => {
      win.webContents.send(GlobalEventEnum.StateChange, { key: "SystemModule", value });
    });
  });
  return store;
};
