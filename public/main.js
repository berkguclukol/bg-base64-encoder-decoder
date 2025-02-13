const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");
const ipc = ipcMain;
const createWindow = () => {
	const win = new BrowserWindow({
		width: 860,
		height: 675,
		maximizable: true,
		autoHideMenuBar: true,
		resizable: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			preload: path.join(__dirname, "public/preload.js"),
		},
	});
	win.setIcon(path.join(__dirname, "assets/icon.png"));
	win.loadFile(path.join(__dirname, "index.html"));
	win.show();
};

app.whenReady().then(() => {
	createWindow();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
