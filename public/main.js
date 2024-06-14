const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");
const ipc = ipcMain;
const createWindow = () => {
	const splash = new BrowserWindow({
		width: 300,
		height: 350,
		transparent: true,
		frame: false,
		alwaysOnTop: true,
	});
	splash.setIcon(path.join(__dirname, "assets/icon.png"));
	splash.loadFile(path.join(__dirname, "splash.html"));
	splash.center();
	const win = new BrowserWindow({
		width: 860,
		height: 675,
		maximizable: true,
		autoHideMenuBar: true,
		resizable: true,
		frame: false,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			preload: path.join(__dirname, "public/preload.js"),
		},
	});
	win.setIcon(path.join(__dirname, "assets/icon.png"));
	win.loadFile(path.join(__dirname, "index.html"));
	setTimeout(function () {
		splash.close();
		win.show();
	}, 3500);
    ipc.on("app/minimize", () => {
		win.minimize();
	});
	ipc.on("app/maximize", () => {
		win.maximize();
	});
	ipc.on("app/quit", () => {
		app.quit();
	});
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
