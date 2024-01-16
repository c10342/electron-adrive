import { UserModuleState } from "../../types/store";

const state: UserModuleState = {
  userInfo: null
};

const UserModule = {
  namespaced: true,
  state,
  getters: {
    // todo
  },
  mutations: {
    // 设置用户信息
    setUserInfo(state: UserModuleState, value: any) {
      state.userInfo = value;
    }
  },
  actions: {
    // 清除用户信息和token
    // clear({ commit }: ActionContext<UserModuleState, GlobalStoreData>) {
    //   commit("clearToken");
    //   commit("setUserInfo", null);
    //   // 清除历史标签
    //   Storage.remove(storageTagKey);
    // },
  }
};

export default UserModule;
