import { GlobalEventEnum } from "@share/event";
import { onBeforeUnmount } from "vue";

export const useEventHook = (name: GlobalEventEnum, action: (...args: any) => any) => {
  window.api.on(name, action);
  onBeforeUnmount(() => {
    window.api.off(name, action);
  });
};
