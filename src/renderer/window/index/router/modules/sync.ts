import { RouteRecordRaw } from "vue-router";
import { MenuType, RouteNameEnunm } from "../../utils/enums";
import Sync from "../../views/sync/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/sync",
    name: RouteNameEnunm.Sync,
    component: Sync,
    meta: {
      menu: {
        icon: "sync",
        label: "自动同步文件夹",
        sort: 60,
        type: MenuType.One
      }
    }
  }
];

export default routes;
