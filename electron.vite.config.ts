import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import { UserConfig, UserConfigExport, mergeConfig } from "vite";
import fs from "fs";

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

const getInput = () => {
  const dirRoot = resolve(__dirname, "src/renderer");
  const list = fs.readdirSync(dirRoot);
  const map: Record<string, any> = {};
  list.forEach((name) => {
    if (fs.statSync(resolve(dirRoot, name)).isFile() && name.endsWith(".html")) {
      map[name.replace(".html", "")] = resolve(dirRoot, name);
    }
  });
  console.log(map);

  return map;
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
        input: getInput()
      }
    }
  })
});
