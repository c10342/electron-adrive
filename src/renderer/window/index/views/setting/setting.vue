<template>
  <menu-layout :name="RouteNameEnunm.Setting" mode="slot">
    <base-col-layout class="setting">
      <template #header>
        <div class="padding-20">
          <h1>设置</h1>
        </div>
      </template>
      <div class="scroll-container padding-20">
        <a-form
          :model="formState"
          :label-col="{ style: { width: '150px' } }"
          :wrapper-col="{ span: 14 }"
          size="large"
          label-align="left"
          :colon="false"
        >
          <a-form-item label="外观">
            <a-radio-group>
              <a-radio :value="SystemThemeEnum.Light">浅色</a-radio>
              <a-radio :value="SystemThemeEnum.Dark">深色</a-radio>
              <a-radio :value="SystemThemeEnum.System">跟随系统</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="自动启动">
            <a-radio value="1">开机时自动启动阿里云盘</a-radio>
            <a-radio value="2">开机启动后最小化窗口</a-radio>
          </a-form-item>
          <a-form-item label="传输设置">
            <a-radio value="1">有传输任务时电脑不休眠</a-radio>
            <a-radio value="2">本次传输完自动关机</a-radio>
          </a-form-item>
          <a-form-item label="文件下载位置">
            <div class="mb-10 flex-row flex-align-center">
              <a-input disabled size="middle" />
              <a-button type="link" size="middle">更改</a-button>
            </div>
            <a-radio value="2">默认此路径为下载路径</a-radio>
          </a-form-item>
          <a-form-item label="多线程上传">
            <a-radio value="2">启用多线程上传</a-radio>
          </a-form-item>
          <a-form-item label="通知">
            <a-radio value="1">传输状态</a-radio>
            <a-radio value="2">系统消息</a-radio>
            <a-radio value="2">传输完成消息提示音</a-radio>
          </a-form-item>
          <a-form-item label="自动更新">
            <a-radio value="1">传输状态</a-radio>
          </a-form-item>
          <a-form-item label="其他">
            <a-button type="link" size="middle">清理缓存</a-button>
          </a-form-item>
          <a-form-item label="账号">
            <div class="account-container">
              <div>
                <a-avatar
                  src="https://xsgames.co/randomusers/assets/avatars/pixel/30.jpg"
                  size="large"
                />
                <span>c10342</span>
              </div>
              <a-button size="middle">退出登录</a-button>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </base-col-layout>
  </menu-layout>
</template>

<script lang="ts" setup>
import MenuLayout from "../../components/menuLayout.vue";
import { RouteNameEnunm, SystemThemeEnum } from "../../utils/enum";
import { reactive } from "vue";
import type { UnwrapRef } from "vue";

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
const formState: UnwrapRef<FormState> = reactive({
  name: "",
  delivery: false,
  type: [],
  resource: "",
  desc: ""
});
</script>

<style lang="scss">
.setting {
  .account-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
