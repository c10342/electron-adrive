import { useStore as useVuexStore } from "vuex";
import { Getters, Dispatch, Commit } from "../types/storeType";
import { GlobalStoreData } from "../types/store";

interface UseStore {
  state: GlobalStoreData;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

export const useStore = (): UseStore => {
  const store = useVuexStore<GlobalStoreData>();
  // 自定义的进行输出结果
  const { state, getters, dispatch, commit }: UseStore = store;
  return {
    state,
    getters,
    commit,
    dispatch
  };
};
