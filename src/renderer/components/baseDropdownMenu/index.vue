<template>
  <a-dropdown :placement="placement" :trigger="trigger">
    <slot></slot>
    <template #overlay>
      <a-menu class="base-dropdown-menu" @click="onClick">
        <menu-items :list="list" :width="width"></menu-items>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts" setup>
import { BaseMenuItem } from "@renderer/types/common";
import { PropType } from "vue";
import MenuItems from "./menuItems.vue";
import { Trigger } from "ant-design-vue/es/dropdown/props";
import { MenuInfo } from "ant-design-vue/es/menu/src/interface";

const props = defineProps({
  list: {
    type: Array as PropType<BaseMenuItem[]>,
    default: () => []
  },
  width: {
    type: String,
    default: ""
  },
  trigger: {
    type: String as PropType<Trigger | Trigger[]>,
    default: "click"
  },
  placement: {
    type: String as PropType<
      | "topRight"
      | "top"
      | "bottom"
      | "bottomLeft"
      | "bottomRight"
      | "topLeft"
      | "topCenter"
      | "bottomCenter"
    >,
    default: "topRight"
  }
});

const getMenuItemByKey = (key?: string | null | number): BaseMenuItem | null | undefined => {
  if (!key) {
    return;
  }
  const run = (list: BaseMenuItem[]) => {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (item.key === key) {
        return item;
      }
      if (item.children?.length) {
        const res = run(item.children);
        if (res) {
          return res;
        }
      }
    }
  };
  return run(props.list);
};

const onClick = (data: MenuInfo) => {
  const item = getMenuItemByKey(data.key);
  if (item) {
    item.onClick?.();
  }
};
</script>

<style lang="scss">
.base-dropdown-menu {
  &.ant-dropdown-menu {
    .ant-dropdown-menu-item {
      line-height: 2;
    }
  }
}
</style>
