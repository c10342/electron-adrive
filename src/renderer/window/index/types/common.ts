import { MenuType, RouteNameEnunm } from "../utils/enums";

export interface MenuItem {
  icon: string;
  label: string;
  sort: number;
  name: string;
}

export interface MenuMate {
  icon: string;
  label: string;
  sort: number;
  // 二级菜单
  type: MenuType;
  parent: RouteNameEnunm;
}
