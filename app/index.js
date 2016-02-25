'use strict'

import electron from 'electron'

import * as async   from './async'
import * as videos  from './videos'
import * as file    from './serializer'

const folders = {
	www: `${__dirname}/node_modules/www`,
	videos: process.argv[2] || __dirname
}

const app = electron.app

let mainWindow

app.on('ready', load)

// Quit when all windows are closed.
.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    load()
  }
})

function load(){
	async.task(
		videos.lookup(folders.videos).then(
			list => file.serialize(
				`${folders.www}/generated-list.js`, 
				`window.videos = ${JSON.stringify(list)}`
			).then(() => {
				let playlist = `file:///${folders.www}/index.html`
				open(playlist)
			})
		),
	 'Looking for videos and preparing them to be loaded into the playlist'
	)
}

function open(url){
  mainWindow = new electron.BrowserWindow({width: 1200, height: 600})
  mainWindow
	  .on('closed', function() {
	    // Dereference the window object, usually you would store windows
	    // in an array if your app supports multi windows, this is the time
	    // when you should delete the corresponding element.
	    mainWindow = null
	  })
	  .loadURL(url)
}