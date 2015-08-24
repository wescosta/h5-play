'use strict'

import * as async  from 'async'
import * as videos from 'videos'
import * as file   from 'serializer'

async.task(
	videos.lookup().then(
		list => file.serialize(
			`${__dirname}/node_modules/www/generated-list.js`, 
			`window.videos = ${JSON.stringify(list)}`
		).then(
			msg => console.log(msg)
		)
	),
 'Looking for videos and preparing them to be loaded into the playlist'
)