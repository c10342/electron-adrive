import { RouteRecordRaw } from "vue-router";
import { MenuType, RouteNameEnunm } from "../../utils/enum";
import Transfer from "../../views/transfer/index.vue";
import Upload from "../../views/transfer/upload.vue";
import Download from "../../views/transfer/download.vue";
import Finish from "../../views/transfer/finish.vue";

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
    },
    redirect: "/upload",
    children: [
      {
        path: "/upload",
        name: RouteNameEnunm.Upload,
        component: Upload,
        meta: {
          menu: {
            icon: "upload",
            label: "上传",
            sort: 90,
            type: MenuType.Two,
            parent: RouteNameEnunm.Transfer
          }
        }
      },
      {
        path: "/download",
        name: RouteNameEnunm.Download,
        component: Download,
        meta: {
          menu: {
            icon: "download",
            label: "下载",
            sort: 80,
            type: MenuType.Two,
            parent: RouteNameEnunm.Transfer
          }
        }
      },
      {
        path: "/finish",
        name: RouteNameEnunm.Finish,
        component: Finish,
        meta: {
          menu: {
            icon: "lightning",
            label: "已完成",
            sort: 80,
            type: MenuType.Two,
            parent: RouteNameEnunm.Transfer
          }
        }
      }
    ]
  }
];

export default routes;
