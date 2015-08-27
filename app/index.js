'use strict'

import * as async   from 'async'
import * as videos  from 'videos'
import * as file    from 'serializer'
import * as browser from 'browser'

let folders = {
	www: `${__dirname}/node_modules/www`,
	videos: process.argv[2] || __dirname
}

async.task(
	videos.lookup(folders.videos).then(
		list => file.serialize(
			`${folders.www}/generated-list.js`, 
			`window.videos = ${JSON.stringify(list)}`
		).then(() => {
			let playlist = `file:///${folders.www}/index.html`

			browser.open(playlist).then(
				loaded => console.log('Yep. Your playlist has been loaded. Enjoy!')
			).catch(
				error  => console.trace('Ops! Something went wrong. I could not open', playlist, error)
			)
		})
	),
 'Looking for videos and preparing them to be loaded into the playlist'
)