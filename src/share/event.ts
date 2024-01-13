// export enum EventEnum {
//   Minimize = "minimize",
//   Close = "close",
//   // 根据路径使用系统默认的软件打开url
//   OpenUrl = "openUrl",
//   OpenWindown = "openWindown",
//   Maximize = "maximize",
//   SetWinAttr = "setWinAttr",
//   Unmaximize = "unmaximize",
//   SetStore = "SetStore",
//   GetStore = "getStorre",
//   DeleteStore = "deleteStore"
// }

// 方法调用
export enum JsbridgeEnum {
  // 设置窗口位置
  SetWinPosition = "setWinPosition",
  // 获取窗口位置
  GetWinPosition = "getWinPosition",
  // 关闭窗口
  CloseWin = "closeWin",
  // 最大化窗口
  MaximizeWin = "maximizeWin",
  // 最小化窗口
  MinimizeWin = "minimizeWin",
  // 还原窗口
  UnmaximizeWin = "unmaximizeWin",
  // 显示窗口
  ShowWin = "showWin",
  // 隐藏窗口
  HideWin = "hideWin"
}

// 全局事件广播
export enum GlobalEventEnum {
  Maximize = "maximize",
  Minimize = "minimize",
  Unmaximize = "unmaximize"
  // StoreChange = "storeChange"
}
