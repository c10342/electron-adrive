import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import folderRoute from "./modules/folder";
import transferRoute from "./modules/transfer";
import applicationRoute from "./modules/application";
import syncRoute from "./modules/sync";
import imageRoute from "./modules/image";
import settingRoute from "./modules/setting";

const routes: RouteRecordRaw[] = [
  ...folderRoute,
  ...transferRoute,
  ...applicationRoute,
  ...syncRoute,
  ...imageRoute,
  ...settingRoute
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
