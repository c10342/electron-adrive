import { getSystemModuleState } from "@share/helper";
import { SystemModuleState } from "@share/type";
import Store from "electron-store";

export let store: Store<{ SystemModule: SystemModuleState }> | null = null;

export const initStore = (params: { name: string }) => {
  store = new Store<{ SystemModule: SystemModuleState }>({
    name: params.name,
    watch: false,
    schema: {
      SystemModule: {
        type: "object",
        default: getSystemModuleState()
      }
    }
  });
};
