const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        },
    });

    win.loadFile('index.html');
}

ipcMain.handle('get-notifications', async () => {
    return new Promise((resolve, reject) => {
        exec("powershell -ExecutionPolicy Bypass -File ./powershell/get_notifications.ps1", (err, stdout, stderr) => {
            if (err) return reject(stderr);
            try {
                resolve(JSON.parse(stdout));
            } catch (e) {
                reject("Failed to parse PowerShell output");
            }
        });
    });
});

app.whenReady().then(createWindow);
