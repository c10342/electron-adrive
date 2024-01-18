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
          :label-col="{ style: { width: '150px' } }"
          :wrapper-col="{ span: 14 }"
          size="large"
          label-align="left"
          :colon="false"
        >
          <a-form-item label="外观">
            <a-radio-group
              :value="state.SystemModule.theme"
              @update:value="updateValue('theme', $event)"
            >
              <a-radio :value="SystemThemeEnum.Light">浅色</a-radio>
              <a-radio :value="SystemThemeEnum.Dark">深色</a-radio>
              <a-radio :value="SystemThemeEnum.System">跟随系统</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="自动启动">
            <a-checkbox
              :checked="state.SystemModule.autoStart"
              @update:checked="updateValue('autoStart', $event)"
            >
              开机时自动启动阿里云盘
            </a-checkbox>
            <a-checkbox
              :checked="state.SystemModule.minStartupWin"
              @update:checked="updateValue('minStartupWin', $event)"
            >
              开机启动后最小化窗口
            </a-checkbox>
          </a-form-item>
          <a-form-item label="传输设置">
            <a-checkbox
              :checked="state.SystemModule.notSleep"
              @update:checked="updateValue('notSleep', $event)"
            >
              有传输任务时电脑不休眠
            </a-checkbox>
            <a-checkbox
              :checked="state.SystemModule.autoShutdown"
              @update:checked="updateValue('autoShutdown', $event)"
            >
              本次传输完自动关机
            </a-checkbox>
          </a-form-item>
          <a-form-item label="文件下载位置">
            <div class="mb-10 flex-row flex-align-center">
              <a-input
                disabled
                size="middle"
                :value="state.SystemModule.downloadLocation"
                @update:value="updateValue('downloadLocation', $event)"
              />
              <a-button type="link" size="middle" @click="onClick">更改</a-button>
            </div>
            <a-checkbox
              :checked="state.SystemModule.defaultLocation"
              @update:checked="updateValue('defaultLocation', $event)"
            >
              默认此路径为下载路径
            </a-checkbox>
          </a-form-item>
          <a-form-item label="多线程上传">
            <a-checkbox
              :checked="state.SystemModule.multiThreaded"
              @update:checked="updateValue('multiThreaded', $event)"
            >
              启用多线程上传
            </a-checkbox>
          </a-form-item>
          <a-form-item label="通知">
            <a-checkbox
              :checked="state.SystemModule.transferStatus"
              @update:checked="updateValue('transferStatus', $event)"
            >
              传输状态
            </a-checkbox>
            <a-checkbox
              :checked="state.SystemModule.systemMessages"
              @update:checked="updateValue('systemMessages', $event)"
            >
              系统消息
            </a-checkbox>
            <a-checkbox
              :checked="state.SystemModule.messageSound"
              @update:checked="updateValue('messageSound', $event)"
            >
              传输完成消息提示音
            </a-checkbox>
          </a-form-item>
          <a-form-item label="自动更新">
            <a-checkbox
              :checked="state.SystemModule.autoUpdate"
              @update:checked="updateValue('autoUpdate', $event)"
            >
              自动更新至最新版本
            </a-checkbox>
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
                <span class="ml-10">c10342</span>
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
import { SystemThemeEnum } from "@share/enum";
import MenuLayout from "../../components/menuLayout.vue";
import { RouteNameEnunm } from "../../utils/enum";
import { useStore } from "../../utils/hooks";
import { SystemModuleState } from "@share/type";

const { state, commit } = useStore();

const updateValue = (key: keyof SystemModuleState, value: any) => {
  commit("SystemModule/updateByKey", {
    key,
    value
  });
};

const onClick = () => {
  window.api
    .showOpenDialog({
      properties: ["openDirectory"]
    })
    .then((res) => {
      if (res.filePaths.length) {
        commit("SystemModule/updateByKey", {
          key: "downloadLocation",
          value: res.filePaths[0]
        });
      }
    });
};
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
  .ant-checkbox-wrapper {
    .ant-checkbox {
      border-radius: 50%;
      .ant-checkbox-inner {
        border-radius: 50%;
      }
      &::after {
        border-radius: 50%;
      }
    }
  }

  .ant-radio-wrapper-checked {
    .ant-radio-checked {
      .ant-radio-inner {
        &::after {
          border-radius: 0;
          background-color: var(--color-primary);
          width: 5.7142857142857135px;
          height: 9.142857142857142px;
          border: 2px solid #fff;
          border-top: 0;
          top: 50%;
          inset-inline-start: 21.5%;
          transform: rotate(45deg) scale(1) translate(-50%, -50%);
          margin-block-start: 0;
          margin-inline-start: 0;
          border-left: 0;
        }
      }
    }
  }
}
</style>
