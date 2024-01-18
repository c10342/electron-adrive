<template>
  <div class="flow-container">
    <div
      class="float"
      @mousedown="onMousedown"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { useDragWin } from "@renderer/utils/useHooks";

const { onMousedown } = useDragWin();

const onMouseenter = () => {
  window.api.setIgnoreMouseEvents({ ignore: false, forward: true });
};
const onMouseleave = () => {
  // forward:true,只有点击事件会穿透窗口，鼠标移动事件仍会触发
  window.api.setIgnoreMouseEvents({ ignore: true, forward: true });
};
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
