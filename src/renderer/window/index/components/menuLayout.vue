<template>
  <base-row-layout class="folder">
    <template #left>
      <base-col-layout class="left-panel">
        <menu-items :name="name"></menu-items>
        <template #footer>
          <a-button>开通超级会员</a-button>
        </template>
      </base-col-layout>
    </template>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </base-row-layout>
</template>

<script lang="ts" setup>
import MenuItems from "./menuItems.vue";

defineProps({
  name: {
    type: String,
    default: ""
  }
});
</script>
