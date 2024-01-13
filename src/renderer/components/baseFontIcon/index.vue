<template>
  <span :class="['base-font-icon', 'iconfont', `icon-${name}`]" :style="{ fontSize }"></span>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { PropType } from "vue";
import { isNumber, isString } from "lodash-es";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String] as PropType<string | number>,
    default: ""
  }
});

const numReg = /^[0-9]+$/;

const fontSize = computed(() => {
  if (isNumber(props.size)) {
    return `${props.size}px`;
  }
  if (isString(props.size) && props.size.match(numReg)) {
    return `${props.size}px`;
  }
  return props.size;
});
</script>

<style lang="scss">
@import "./icon/iconfont.css";

.base-font-icon {
  display: inline-block;
}
</style>
