<template>
  <base-dropdown-menu :list="menus" width="140px" trigger="contextmenu" placement="bottom">
    <div class="folder-item">
      <img class="folder-image" :src="FolderImage" />
      <div class="folder-title">软考</div>
      <div class="folder-time">2023/06/06 22:17</div>
    </div>
  </base-dropdown-menu>
</template>

<script lang="ts" setup>
import { BaseMenuItem } from "@renderer/types/common";
import { BaseMenuType } from "@renderer/utils/enum";
import { FolderImage } from "@renderer/utils/images";

const menus: BaseMenuItem[] = [
  {
    label: "快传",
    type: BaseMenuType.Item,
    key: "1"
  },
  { label: "下载", type: BaseMenuType.Item, key: "2" },
  { label: "收藏", type: BaseMenuType.Item, key: "3" },
  { type: BaseMenuType.Line, key: "4" },
  { label: "重命名", type: BaseMenuType.Item, key: "5" },
  {
    label: "移动",
    type: BaseMenuType.Item,
    key: "6"
  },
  {
    label: "详细信息",
    type: BaseMenuType.Item,
    key: "9"
  },
  { type: BaseMenuType.Line, key: "7" },
  {
    label: "放入回收站",
    type: BaseMenuType.Item,
    key: "8"
  }
];
</script>

<style lang="scss">
.folder-item {
  width: 124px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #f5f5f6;
  }
  .folder-image {
    height: 90px;
  }
  .folder-title {
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    color: rgb(37, 38, 43);
  }
  .folder-time {
    width: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 1.6;
    color: #b0b1b3;
  }
}
</style>
