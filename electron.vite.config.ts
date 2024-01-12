import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

const getInput = () => {
  const dirRoot = resolve(__dirname, "src/renderer/window");
  const list = fs.readdirSync(dirRoot);
  const map: Record<string, any> = {};
  list.forEach((name) => {
    if (fs.statSync(resolve(dirRoot, name)).isDirectory()) {
      map[name] = resolve(dirRoot, name, "index.html");
    }
  });

  return map;
};

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer")
      }
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      })
    ],
    build: {
      rollupOptions: {
        input: getInput()
      }
    }
  }
});
