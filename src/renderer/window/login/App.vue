<template>
  <div>
    <a-radio-group :value="state.SystemModule.theme" @update:value="updateValue('theme', $event)">
      <a-radio :value="SystemThemeEnum.Light">浅色</a-radio>
      <a-radio :value="SystemThemeEnum.Dark">深色</a-radio>
      <a-radio :value="SystemThemeEnum.System">跟随系统</a-radio>
    </a-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { SystemThemeEnum } from "@share/enum";
import { useStore } from "vuex";

const { state, commit } = useStore();

const updateValue = (key: string, value: any) => {
  commit("SystemModule/updateByKey", {
    key,
    value
  });
};
</script>
