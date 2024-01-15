<template>
  <template v-for="item in list">
    <a-sub-menu
      v-if="item.type === BaseMenuType.Item && item.children?.length"
      :key="item.key"
      :title="item.label"
      :style="{ width: item.width || width }"
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
    <a-menu-divider
      v-if="item.type === BaseMenuType.Line"
      :key="item.key"
      :style="{ width: item.width || width }"
    ></a-menu-divider>
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
