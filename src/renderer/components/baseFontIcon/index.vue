<template>
  <span :class="['base-font-icon', 'iconfont', `icon-${name}`]"></span>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
@import "./icon/iconfont.css";

.base-font-icon {
  display: inline-block;
}
</style>
