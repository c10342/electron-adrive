<template>
  <div class="base-win-bar" @mousedown="onMousedown">
    <div class="base-win-bar-icon" @mousedown.stop></div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount } from "vue";

let startX = 0;
let startY = 0;

const onMouseMove = (event: MouseEvent) => {
  const endX = event.clientX;
  const endY = event.clientY;
  const offsetX = endX - startX;
  const offsetY = endY - startY;
  console.log("offsetX", offsetX);
  console.log("offsetY", offsetY);

  startX = endX;
  startY = endY;
};

const onMouseUp = () => {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
};
const onMousedown = (event: MouseEvent) => {
  startX = event.clientX;
  startY = event.clientY;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
};

onBeforeUnmount(onMouseUp);
</script>

<style lang="scss">
.base-win-bar {
  height: var(--win-bar-height);
  background-color: red;
  position: relative;
  .base-win-bar-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
  }
}
</style>
