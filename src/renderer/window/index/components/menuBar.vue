<template>
  <div class="menu-bar">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="menu-item"
      :class="{ 'menu-active': index === 0 }"
    >
      <base-font-icon :name="item.icon" :size="item.size"></base-font-icon>
      <span class="menu-label">{{ item.label }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const list = [
  {
    icon: "folder",
    label: "文件",
    size: 24
  },
  {
    icon: "image",
    label: "相册",
    size: 24
  },
  {
    icon: "grid",
    label: "应用",
    size: 24
  },
  {
    icon: "transfer_vertical_line",
    label: "传输",
    size: 24
  },
  {
    icon: "sync",
    label: "自动同步文件夹",
    size: 24
  }
];
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
  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    width: 60px;
    height: 60px;
    + .menu-item {
      margin-top: 10px;
    }
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
