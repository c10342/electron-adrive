import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Application from "../views/application/index.vue";
import Folder from "../views/folder/index.vue";
import Image from "../views/image/index.vue";
import Sync from "../views/sync/index.vue";
import Transfer from "../views/transfer/index.vue";
import { RouteNameEnunm } from "../utils/enums";

const routes: RouteRecordRaw[] = [
  {
    path: "/application",
    name: RouteNameEnunm.Application,
    component: Application,
    meta: {
      menu: {
        icon: "grid",
        label: "应用",
        sort: 80
      }
    }
  },
  {
    path: "/",
    name: RouteNameEnunm.Folder,
    component: Folder,
    meta: {
      menu: {
        icon: "folder",
        label: "文件",
        sort: 100
      }
    }
  },
  {
    path: "/image",
    name: RouteNameEnunm.Image,
    component: Image,
    meta: {
      menu: {
        icon: "image",
        label: "相册",
        sort: 90
      }
    }
  },
  {
    path: "/sync",
    name: RouteNameEnunm.Sync,
    component: Sync,
    meta: {
      menu: {
        icon: "sync",
        label: "自动同步文件夹",
        sort: 60
      }
    }
  },
  {
    path: "/transfer",
    name: RouteNameEnunm.Transfer,
    component: Transfer,
    meta: {
      menu: {
        icon: "transfer_vertical_line",
        label: "传输",
        sort: 70
      }
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
