<template>
  <div class="flow-container">
    <base-dropdown-menu :list="menus" width="100px" trigger="contextmenu" placement="bottom">
      <div
        class="float"
        @mousedown="onMousedown"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      ></div>
    </base-dropdown-menu>
  </div>
</template>

<script lang="ts" setup>
import { BaseMenuItem } from "@renderer/types/common";
import { BaseMenuType } from "@renderer/utils/enum";
import { useDragWin } from "@renderer/utils/useHooks";

const { onMousedown } = useDragWin();

const onMouseenter = () => {
  window.api.setIgnoreMouseEvents({ ignore: false, forward: true });
};
const onMouseleave = () => {
  // forward:true,只有点击事件会穿透窗口，鼠标移动事件仍会触发
  window.api.setIgnoreMouseEvents({ ignore: true, forward: true });
};

const menus: BaseMenuItem[] = [
  {
    label: "打开",
    type: BaseMenuType.Item,
    key: "1"
  },
  { label: "退出", type: BaseMenuType.Item, key: "2" }
];
</script>

<style lang="scss">
.flow-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .float {
    width: 60px;
    height: 60px;
    background-color: red;
    border-radius: 50%;
  }
}
</style>
