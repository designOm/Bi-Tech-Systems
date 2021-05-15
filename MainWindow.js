const {ipcMain, BrowserWindow} = require("electron");
const ipc = ipcMain;

class MainWindow extends BrowserWindow {
  constructor(isDev) {
    super({
      title: "Bi-Tech Systems",
      width: isDev ? 1400 : 1000,
      height: 740,
      minHeight: 740,
      minWidth: 1000,
      frame: false,
      show: false,
      icon: `${__dirname}/assets/logo.png`,
      webPreferences: {
        nodeIntegration: true,
        devTools: true,
      },
    });

    ipc.on("titleBarAction:close", () => {
      console.log("close");
      this.close();
    });
    ipc.on("titleBarAction:minimize", () => {
      console.log("minimized");
      this.minimize();
    });
    ipc.on("titleBarAction:maximizeOrRestore", () => {
      this.isMaximized() ? this.restore() : this.maximize();
    });
    this.on("maximize", () => {
      this.webContents.send("titleBarStatus:maximized");
    });
    this.on("unmaximize", () => {
      this.webContents.send("titleBarStatus:restored");
    });
  }
}

module.exports = MainWindow;
