import { RouteRecordRaw } from "vue-router";
import { MenuType, RouteNameEnunm } from "../../utils/enum";
import Application from "../../views/application/index.vue";
import Collection from "../../views/application/collection.vue";
import Recycle from "../../views/application/recycle.vue";

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
    },
    redirect: "/recycle",
    children: [
      {
        path: "/recycle",
        name: RouteNameEnunm.Recycle,
        component: Recycle,
        meta: {
          menu: {
            icon: "delete",
            label: "回收站",
            sort: 90,
            type: MenuType.Two,
            parent: RouteNameEnunm.Application
          }
        }
      },
      {
        path: "/collection",
        name: RouteNameEnunm.Collection,
        component: Collection,
        meta: {
          menu: {
            icon: "collection",
            label: "我的收藏",
            sort: 80,
            type: MenuType.Two,
            parent: RouteNameEnunm.Application
          }
        }
      }
    ]
  }
];

export default routes;
