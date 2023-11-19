import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import { UserConfig, UserConfigExport, mergeConfig } from "vite";
import commonjs from "@rollup/plugin-commonjs";

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
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        plugins: [commonjs()]
      }
    }
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
    plugins: [react()]
  })
});
