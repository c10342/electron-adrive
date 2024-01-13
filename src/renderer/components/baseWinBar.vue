<template>
  <div class="base-win-bar">
    <div class="base-win-bar-icon" @mousedown.stop>
      <div class="bar-icon-item" @click="onMinimize">
        <base-font-icon name="minimize"></base-font-icon>
      </div>
      <div v-if="isMaximize" class="bar-icon-item" @click="onUnmaximize">
        <base-font-icon name="maximize" class="fs-13"></base-font-icon>
      </div>
      <div v-else class="bar-icon-item" @click="onMaximize">
        <base-font-icon name="window-maximize" class="fs-13"></base-font-icon>
      </div>
      <div class="bar-icon-item bar-icon-close" @click="onClose">
        <base-font-icon name="close"></base-font-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useEventHook } from "@renderer/utils/useHooks";
import { GlobalEventEnum } from "@share/event";
import { ref } from "vue";

const isMaximize = ref(false);

useEventHook(GlobalEventEnum.Maximize, () => {
  isMaximize.value = true;
});
useEventHook(GlobalEventEnum.Unmaximize, () => {
  isMaximize.value = false;
});

const onMinimize = () => {
  window.api.minimizeWin();
};
const onMaximize = () => {
  window.api.maximizeWin();
};
const onUnmaximize = () => {
  window.api.unmaximizeWin();
};

const onClose = () => {
  window.api.closeWin();
};
</script>

<style lang="scss">
.base-win-bar {
  height: var(--win-bar-height);
  position: relative;
  user-select: none;
  -webkit-app-region: drag;
  .base-win-bar-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    -webkit-app-region: no-drag;
    .bar-icon-item {
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #25262b;
      &:hover {
        background-color: #dbdeed;
      }
      &.bar-icon-close {
        &:hover {
          background-color: var(--color-dangerr);
          color: #fff;
        }
      }
    }
  }
}
</style>
