import { createStore } from "vuex";
import modules from "./modules";
import { GlobalStoreData, UseStore } from "../types/store";

const store: UseStore = createStore<GlobalStoreData>({
  modules
});

export default store;
