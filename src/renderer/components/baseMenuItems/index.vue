<template>
  <a-menu class="base-menu-items">
    <menu-items :list="list" :width="width"></menu-items>
  </a-menu>
</template>
<script lang="ts" setup>
import { BaseMenuItem } from "@renderer/types/common";
import { PropType } from "vue";
import MenuItems from "./menuItems.vue";

defineProps({
  list: {
    type: Array as PropType<BaseMenuItem[]>,
    default: () => []
  },
  width: {
    type: String,
    default: ""
  }
});
</script>

<style lang="scss">
.base-menu-items {
  .menu-line {
    margin: 2px 0;
    height: 1px;
    background-color: #f5f5f6;
    width: 100%;
  }
  &.ant-dropdown-menu {
    .ant-dropdown-menu-item {
      line-height: 2;
    }
  }
}
</style>
