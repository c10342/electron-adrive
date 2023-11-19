import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import { UserConfig, UserConfigExport, mergeConfig } from "vite";

const commonConfig: UserConfigExport = {
  resolve: {
    alias: {
      "@share": resolve("src/share")
    }
  }
};

const createConfig = (config: UserConfig) => {
  return mergeConfig(commonConfig, config);
};

export default defineConfig({
  main: createConfig({
    plugins: [externalizeDepsPlugin()]
  }),
  preload: createConfig({
    plugins: [externalizeDepsPlugin()]
  }),
  renderer: createConfig({
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src")
      }
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/renderer/index.html"),
          privacyPolicy: resolve(__dirname, "src/renderer/privacyPolicy.html"),
          sla: resolve(__dirname, "src/renderer/sla.html")
        }
      }
    }
  })
});
