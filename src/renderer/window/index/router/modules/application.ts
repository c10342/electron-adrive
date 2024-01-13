import { RouteRecordRaw } from "vue-router";
import { MenuType, RouteNameEnunm } from "../../utils/enums";
import Application from "../../views/application/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/application",
    name: RouteNameEnunm.Application,
    component: Application,
    meta: {
      menu: {
        icon: "grid",
        label: "应用",
        sort: 80,
        type: MenuType.One
      }
    }
  }
];

export default routes;
