<template>
  <div class="scroll-container padding-20">
    <h1 class="padding-10">备份盘</h1>
    <a-row>
      <a-col v-for="i in 10" :key="i" :xs="12" :sm="12" :md="8" :lg="6" :xl="4">
        <folder-item></folder-item>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import FolderItem from "../../components/folderItem.vue";
</script>

<style lang="scss">
// todo
</style>
