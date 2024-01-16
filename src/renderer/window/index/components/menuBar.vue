<template>
  <div class="menu-bar">
    <div class="menu-wrapper">
      <img :src="Logo" class="menu-logo" />
      <div
        v-for="menu in menus"
        :key="menu.name"
        class="menu-item"
        :class="{ 'menu-active': menu.name === routerName }"
        @click="onClick(menu)"
      >
        <base-font-icon :name="menu.icon" :size="24"></base-font-icon>
        <span class="menu-label">{{ menu.label }}</span>
      </div>
    </div>
    <div class="menu-wrapper">
      <base-dropdown-menu :list="settingMenus" width="180px">
        <div class="menu-setting menu-bottom">
          <base-font-icon :size="40" name="settings"></base-font-icon>
        </div>
      </base-dropdown-menu>
      <a-avatar
        src="https://xsgames.co/randomusers/assets/avatars/pixel/30.jpg"
        size="large"
        class="menu-bottom"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { MenuItem, MenuMate } from "../types/common";
import { MenuType, RouteNameEnunm } from "../utils/enum";
import { Logo } from "@share/resources";
import { BaseMenuItem } from "@renderer/types/common";
import { BaseMenuType } from "@renderer/utils/enum";

const router = useRouter();

const route = useRoute();

const routerName = computed(() => {
  const menu = route.meta?.menu as MenuMate | null;
  return (menu?.parent || route.name) as string;
});

const menus = computed(() => {
  const routes = router.getRoutes().filter((r) => {
    const menu = r.meta?.menu as MenuMate | null;
    return menu && menu?.type === MenuType.One;
  });
  const list: MenuItem[] = routes.map((r) => {
    const menu = r.meta.menu as MenuMate;
    const obj: MenuItem = {
      label: menu.label,
      icon: menu.icon,
      sort: menu.sort,
      name: r.name as string
    };
    return obj;
  });

  return list.sort((a, b) => b.sort - a.sort);
});

const settingMenus: BaseMenuItem[] = [
  {
    label: "会员中心",
    type: BaseMenuType.Item,
    key: "1"
  },
  { label: "达人中心", type: BaseMenuType.Item, key: "2" },
  { type: BaseMenuType.Line, key: "3" },
  { label: "帮助与反馈", type: BaseMenuType.Item, key: "4" },
  {
    label: "关于",
    type: BaseMenuType.Item,
    key: "5",
    children: [
      { label: "隐私条款", type: BaseMenuType.Item, key: "5-1", width: "120px" },
      { label: "用户条例", type: BaseMenuType.Item, key: "5-2", width: "120px" }
    ]
  },
  { type: BaseMenuType.Line, key: "6" },
  {
    label: "设置",
    type: BaseMenuType.Item,
    key: "7",
    onClick() {
      router.push({ name: RouteNameEnunm.Setting });
    }
  },
  { label: "检查更新", type: BaseMenuType.Item, key: "8" },
  { type: BaseMenuType.Line, key: "9" },
  { label: "退出登录", type: BaseMenuType.Item, key: "10" }
];

const onClick = (menu: MenuItem) => {
  if (menu.name === routerName.value) {
    return;
  }
  router.push({ name: menu.name });
};
</script>

<style lang="scss">
.menu-bar {
  width: 80px;
  background-color: #f5f5f6;
  height: 100%;
  border-right: 1px solid #e6e7e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .menu-logo {
    width: 50px;
    height: 50px;
  }
  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    width: 60px;
    height: 60px;
    margin-top: 10px;
    color: #25262b;

    &.menu-active {
      background-color: var(--hover-color);
    }
    &:hover {
      background-color: var(--hover-color);
    }
    .menu-label {
      font-size: 12px;
      margin-top: 6px;
      padding: 0 4px;
    }
  }

  .menu-setting {
    border-radius: 50%;
    border: 1px solid #e3e3e5;
    color: #5f5f63;
    cursor: pointer;
    &:hover {
      background-color: #ececee;
    }
  }
  .menu-bottom {
    + .menu-bottom {
      margin-top: 20px;
    }
    // height: 40px;
    // width: 40px;
    // > * {
    //   display: inline-block;
    //   height: 100%;
    //   width: 100%;
    // }
  }
}
</style>
