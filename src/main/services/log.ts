import log from "electron-log/main";
import { app } from "electron";

// 日志等级：error->warn->info->verbose->debug->silly
export const initLog = () => {
  log.initialize({ preload: true });
  log.transports.file.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}";
  //   只输出大于info等级的日志到文件
  log.transports.file.level = "info";

  app.on("render-process-gone", (event, webContents, details) => {
    log.error("render-process-gone", event, webContents, details);
  });

  app.on("child-process-gone", (event, details) => {
    log.error("render-process-gone", event, details);
  });
  process.on("unhandledRejection", (reason) => {
    log.error(`unhandledRejection`, reason);
  });
  process.on("uncaughtException", (error, origin) => {
    log.error("uncaughtException", error, origin);
  });
};

export const logError = (...args: any) => {
  log.error(...args);
};
export const logWarn = (...args: any) => {
  log.warn(...args);
};
export const logInfo = (...args: any) => {
  log.info(...args);
};
