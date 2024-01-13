import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Application from "../views/application/index.vue";
import Folder from "../views/folder/index.vue";
import Image from "../views/image/index.vue";
import Sync from "../views/sync/index.vue";
import Transfer from "../views/transfer/index.vue";
import Backup from "../views/folder/backup.vue";
import Resource from "../views/folder/resource.vue";
import { RouteNameEnunm, MenuType } from "../utils/enums";
import AllImage from "../views/image/all.vue";
import MyImage from "../views/image/my.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: RouteNameEnunm.Folder,
    component: Folder,
    meta: {
      menu: {
        icon: "folder",
        label: "文件",
        sort: 100,
        // 一级菜单
        type: MenuType.One
      }
    },
    redirect: "/backup",
    children: [
      {
        path: "/backup",
        name: RouteNameEnunm.Backup,
        component: Backup,
        meta: {
          menu: {
            icon: "disk-drive",
            label: "备份盘",
            sort: 100,
            // 二级菜单
            type: MenuType.Two
          }
        }
      },
      {
        path: "/resource",
        name: RouteNameEnunm.Resource,
        component: Resource,
        meta: {
          menu: {
            icon: "resource-twoziyuan2",
            label: "资源库",
            sort: 90,
            // 二级菜单
            type: MenuType.Two
          }
        }
      }
    ]
  },
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
  },
  {
    path: "/image",
    name: RouteNameEnunm.Image,
    component: Image,
    meta: {
      menu: {
        icon: "image",
        label: "相册",
        sort: 90,
        type: MenuType.One
      }
    },
    redirect: "/allImage",
    children: [
      {
        path: "/allImage",
        name: RouteNameEnunm.AllImage,
        component: AllImage,
        meta: {
          menu: {
            icon: "image",
            label: "全部照片",
            sort: 100,
            // 二级菜单
            type: MenuType.Two
          }
        }
      },
      {
        path: "/myImage",
        name: RouteNameEnunm.MyImage,
        component: MyImage,
        meta: {
          menu: {
            icon: "resourceziyuan",
            label: "我的相册",
            sort: 90,
            // 二级菜单
            type: MenuType.Two
          }
        }
      }
    ]
  },
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
  },
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
