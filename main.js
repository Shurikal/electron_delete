const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
const fs = require('fs')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
}

function createFile() {
  const filename = path.join(__dirname, "to_be_deleted");
  fs.writeFile(filename, "", function (err) {
    if (err) {
      console.error("Failed to create file:", err);
    } else {
      console.log(`File ${filename} created successfully`);
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  createFile();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
