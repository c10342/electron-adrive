import { RouteRecordRaw } from "vue-router";
import { MenuType, RouteNameEnunm } from "../../utils/enums";
import Transfer from "../../views/transfer/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/transfer",
    name: RouteNameEnunm.Transfer,
    component: Transfer,
    meta: {
      menu: {
        icon: "transfer_vertical_line",
        label: "传输",
        sort: 70,
        type: MenuType.One
      }
    }
  }
];

export default routes;
