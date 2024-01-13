import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import folderRoute from "./modules/folder";
import transferRoute from "./modules/transfer";
import applicationRoute from "./modules/application";
import syncRoute from "./modules/sync";
import imageRoute from "./modules/image";

const routes: RouteRecordRaw[] = [
  ...folderRoute,
  ...transferRoute,
  ...applicationRoute,
  ...syncRoute,
  ...imageRoute
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;