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
    resolve: {
      alias: {
        "@share": resolve("src/share")
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    resolve: {
      alias: {
        "@share": resolve("src/share")
      }
    },
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer"),
        "@share": resolve("src/share")
      }
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ],
        dirs: "components",
        globs: [
          "components/*.vue",
          "components/*.tsx",
          "components/*/index.vue",
          "components/*/index.tsx",
          "components/*/index.ts"
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
