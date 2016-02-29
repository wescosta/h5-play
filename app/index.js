'use strict'

import electron from 'electron'

const app = electron.app,
      url = `file://${__dirname}/index.html`

let mainWindow

let load = () => {
  mainWindow = new electron.BrowserWindow({width: 1200, height: 600})
  mainWindow
    .on('closed', () => mainWindow = null)
    .loadURL(url)

  mainWindow.webContents.openDevTools()
}

app
  .on('ready', load)
  .on('activate', () => { if (!mainWindow) load() })
  .on('window-all-closed', () => {
    if (process.platform !== 'darwin')
      app.quit()
  })