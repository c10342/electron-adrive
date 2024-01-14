<template>
  <template v-for="item in list">
    <a-sub-menu
      v-if="item.type === BaseMenuType.Item && item.children?.length"
      :key="item.key"
      :title="item.label"
    >
      <menu-items :list="item.children" :width="width"></menu-items>
    </a-sub-menu>
    <a-menu-item
      v-if="item.type === BaseMenuType.Item && !item.children?.length"
      :key="item.key"
      :style="{ width: item.width || width }"
    >
      {{ item.label }}
    </a-menu-item>
    <div
      v-if="item.type === BaseMenuType.Line"
      :key="item.key"
      :style="{ width: item.width || width }"
      class="menu-line"
    ></div>
  </template>
</template>
<script lang="ts" setup>
import { BaseMenuItem } from "@renderer/types/common";
import { PropType } from "vue";
import { BaseMenuType } from "@renderer/utils/enum";

defineProps({
  list: {
    type: Array as PropType<BaseMenuItem[]>,
    default: () => []
  },
  width: {
    type: String,
    default: ""
  }
});
</script>
