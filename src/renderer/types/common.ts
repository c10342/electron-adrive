import { BaseMenuType } from "@renderer/utils/enum";

export interface BaseMenuItem {
  type: BaseMenuType;
  label?: string;
  children?: BaseMenuItem[];
  key: string;
  width?: string;
  onClick?: () => any;
}
