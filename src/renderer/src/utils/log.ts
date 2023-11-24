import log from "electron-log/renderer";

export const logError = (...args: any) => {
  log.error(...args);
};
export const logWarn = (...args: any) => {
  log.warn(...args);
};
export const logInfo = (...args: any) => {
  log.info(...args);
};
