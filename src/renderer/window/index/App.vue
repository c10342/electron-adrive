<template>
  <base-win-bar-layout>
    <base-row-layout>
      <template #left>
        <menu-bar></menu-bar>
      </template>
    </base-row-layout>
  </base-win-bar-layout>
</template>

<script lang="ts" setup>
import MenuBar from "./components/menuBar.vue";
</script>
