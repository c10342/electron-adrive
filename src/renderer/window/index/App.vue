<template>
  <base-win-bar-layout>
    <base-row-layout>
      <template #left>
        <menu-bar></menu-bar>
      </template>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </base-row-layout>
  </base-win-bar-layout>
</template>

<script lang="ts" setup>
import MenuBar from "./components/menuBar.vue";
</script>

<style lang="scss">
.left-panel {
  border-right: 1px solid #e6e7e8;
  width: 170px;
  height: 100%;
}
</style>
