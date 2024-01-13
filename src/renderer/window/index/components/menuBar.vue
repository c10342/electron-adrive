<template>
  <div class="menu-bar">
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
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import Logo from "../../../../../resources/icon.png";
import { MenuItem, MenuMate } from "../types/common";
import { MenuType } from "../utils/enum";

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

    &.menu-active {
      background-color: var(--hover-color);
    }
    &:hover {
      background-color: var(--hover-color);
    }
    .menu-label {
      font-size: 12px;
      margin-top: 6px;
      color: #25262b;
      padding: 0 4px;
    }
  }
}
</style>
