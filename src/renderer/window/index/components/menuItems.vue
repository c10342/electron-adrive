<template>
  <div class="menu-items">
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
import { MenuItem, MenuMate } from "../types/common";

const props = defineProps({
  name: {
    type: String,
    default: ""
  }
});

const router = useRouter();

const route = useRoute();

const routerName = computed(() => {
  return route.name as string;
});

const menus = computed(() => {
  const item = router.getRoutes().find((r) => r.name === props.name);
  if (!item) {
    return [];
  }
  const list: MenuItem[] = (item.children ?? [])
    .filter((r) => !!r.meta?.menu)
    .map((r) => {
      const menu = r.meta?.menu as MenuMate;
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
  router.push({ name: menu.name });
};
</script>

<style lang="scss">
.menu-items {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    padding: 0 10px;

    &.menu-active {
      background-color: var(--hover-color);
      &:hover {
        background-color: var(--hover-color);
      }
    }
    + .menu-item {
      margin-top: 4px;
    }

    &:hover {
      background-color: #f5f5f6;
    }

    .menu-label {
      font-size: 14px;
      color: #25262b;
      padding-left: 10px;
    }
  }
}
</style>
