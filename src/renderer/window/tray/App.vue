<template>
  <div class="tray">
    <template v-for="(item, index) in list">
      <div v-if="item.type === 'line'" :key="`lin-${index}`" class="tray-line"></div>
      <div
        v-else-if="item.type === 'item'"
        :key="`item-${index}`"
        class="tray-item"
        @click="onClick(item)"
      >
        {{ item.label }}
      </div>
    </template>
    <div class="tray-info">
      <span class="capacity-info">
        <span>121GB</span>
        <span class="ml-2 mr-2">/</span>
        <span>809GB</span>
      </span>
      <img :src="Logo" class="user-avator" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WinNameEnum } from "@share/enum";
import Logo from "../../../../resources/icon.png";
interface MenuItem {
  label: string;
  type: "item";
  onClick?: () => any;
}

interface MenuLine {
  type: "line";
}

const list: Array<MenuItem | MenuLine> = [
  {
    label: "打开主面板",
    type: "item",
    onClick() {
      console.log(window.api.showWin);

      window.api.showWin({ name: WinNameEnum.Main });
    }
  },
  { label: "打开阿里云盘网页版", type: "item" },
  { type: "line" },
  { label: "设置", type: "item" },
  { label: "检查更新", type: "item" },
  { type: "line" },
  { label: "关于", type: "item" },
  { label: "帮助中心", type: "item" },
  { label: "在线咨询", type: "item" },
  { type: "line" },
  { label: "退出阿里云盘", type: "item" }
];

const onClick = (item: MenuItem) => {
  item.onClick?.();
  window.api.hideWin();
};
</script>

<style lang="scss">
.tray {
  user-select: none;
  width: 100%;
  height: 100%;
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  .tray-line {
    padding: 0px 10px;
    margin: 2px 0;
    height: 1px;
    background-color: #f5f5f6;
    width: 100%;
  }
  .tray-item {
    padding: 0 10px;
    color: #25262b;
    cursor: pointer;
    width: 100%;
    flex: 1;
    font-size: 12px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #f5f5f6;
    }
  }
  .tray-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    border-top: 1px solid #e6e7e8;
    padding: 0 10px;
    margin-top: 2px;
    .capacity-info {
      color: #626266;
      font-size: 12px;
    }
    .user-avator {
      border-radius: 50%;
      width: 28px;
      height: 28px;
    }
  }
}
</style>
