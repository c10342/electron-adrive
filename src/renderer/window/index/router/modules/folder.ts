import { RouteRecordRaw } from "vue-router";
import { MenuType, RouteNameEnunm } from "../../utils/enums";
import Folder from "../../views/folder/index.vue";
import Backup from "../../views/folder/backup.vue";
import Resource from "../../views/folder/resource.vue";

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
            type: MenuType.Two,
            parent: RouteNameEnunm.Folder
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
            type: MenuType.Two,
            parent: RouteNameEnunm.Folder
          }
        }
      }
    ]
  }
];

export default routes;
