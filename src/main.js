const { app, BrowserWindow } = require('electron')
const electron = require('electron')

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1600,
      height: 1000
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit() }
  })

  app.whenReady().then(() => {
    app.on('activate', () => {
      if (process.platform === 'darwin' && BrowserWindow.getAllWindows().length === 0) { createWindow() } 
    })
  })