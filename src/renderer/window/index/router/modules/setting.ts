import { RouteRecordRaw } from "vue-router";
import { RouteNameEnunm } from "../../utils/enum";
import Setting from "../../views/setting/setting.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/setting",
    name: RouteNameEnunm.Setting,
    component: Setting
  }
];

export default routes;
