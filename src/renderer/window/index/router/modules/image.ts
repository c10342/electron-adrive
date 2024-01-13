import { MenuType, RouteNameEnunm } from "../../utils/enums";
import AllImage from "../../views/image/all.vue";
import MyImage from "../../views/image/my.vue";
import Image from "../../views/image/index.vue";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
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
            type: MenuType.Two,
            parent: RouteNameEnunm.Image
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
            type: MenuType.Two,
            parent: RouteNameEnunm.Image
          }
        }
      }
    ]
  }
];

export default routes;
