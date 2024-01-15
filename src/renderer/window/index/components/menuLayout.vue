<template>
  <base-row-layout class="base-menu-layout">
    <template #left>
      <base-col-layout class="menu-panel">
        <div class="menu-items">
          <div
            v-for="menu in menus"
            :key="menu.name"
            class="menu-item"
            :class="{ 'menu-active': menu.name === routerName }"
            @click="onClick(menu)"
          >
            <base-font-icon :name="menu.icon" :size="24"></base-font-icon>
            <span class="menu-label">{{ menu.label }}</span>
          </div>
        </div>
        <template #footer>
          <div class="menu-footer">
            <div class="menu-banner">
              <div class="time-label">{{ dateLabel }}</div>
              <div class="status-num">+1</div>
              <div class="status-label">好运</div>
            </div>
            <div class="info-item">
              <div class="info-num">
                <span>121.57GB</span>
                <span class="ml-2 mr-2">/</span>
                <span>809GB</span>
              </div>
              <a-button type="link" block size="small" class="info-manage">管理</a-button>
            </div>
            <a-progress :percent="30" size="small" style="margin-inline-end: 0" />
            <a-button block size="large">开通超级会员</a-button>
          </div>
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
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { MenuItem, MenuMate } from "../types/common";
import moment from "moment";

const props = defineProps({
  name: {
    type: String,
    default: ""
  }
});

const router = useRouter();

const route = useRoute();

const routerName = computed(() => {
  return route.name as string;
});

const menus = computed(() => {
  const item = router.getRoutes().find((r) => r.name === props.name);
  if (!item) {
    return [];
  }
  const list: MenuItem[] = (item.children ?? [])
    .filter((r) => !!r.meta?.menu)
    .map((r) => {
      const menu = r.meta?.menu as MenuMate;
      const obj: MenuItem = {
        label: menu.label,
        icon: menu.icon,
        sort: menu.sort,
        name: r.name as string
      };
      return obj;
    });

  return list.sort((a, b) => b.sort - a.sort);
});

const dateLabel = moment().format("yyyy年MM月DD日");

const onClick = (menu: MenuItem) => {
  router.push({ name: menu.name });
};
</script>

<style lang="scss">
.base-menu-layout {
  .menu-panel {
    border-right: 1px solid #e6e7e8;
    width: 170px;
    height: 100%;
    .menu-items {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14px;

      .menu-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        border-radius: 8px;
        width: 100%;
        height: 40px;
        padding: 0 10px;

        &.menu-active {
          background-color: var(--hover-color);
          &:hover {
            background-color: var(--hover-color);
          }
        }
        + .menu-item {
          margin-top: 4px;
        }

        &:hover {
          background-color: #f5f5f6;
        }

        .menu-label {
          font-size: 14px;
          color: #25262b;
          padding-left: 10px;
        }
      }
    }
  }

  .menu-footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    .menu-banner {
      background-image: url("https://gw.alicdn.com/imgextra/i1/O1CN01golZ4y29oGacIzDH9_!!6000000008114-2-tps-444-240.png");
      border-radius: 10px;
      background-size: contain;
      width: 100%;
      height: 80px;
      margin-bottom: 8px;
      padding: 10px 14px;
      .time-label {
        font-size: 12px;
        color: #fff;
      }
      .status-label {
        font-size: 18px;
        color: #fff;
        text-align: right;
        margin-top: 4px;
      }
      .status-num {
        color: rgba(255, 255, 255, 0.72);
        text-align: right;
        font-size: 12px;
        margin-top: 10px;
      }
    }
    .info-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .info-num {
        font-size: 11px;
      }
      .info-manage {
        width: auto;
        font-size: 12px;
        padding: 0;
        height: auto;
      }
    }
  }
}
</style>
