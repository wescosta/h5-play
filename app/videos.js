'use strict'

var glob = require('glob')

export const SUPPORTED_VIDEO_FORMATS_GLOB = '**/*.{mp4,ogg,webm}'

export function lookup(folder = __dirname) {
	return new Promise((resolve, reject) => {
		new glob(SUPPORTED_VIDEO_FORMATS_GLOB, {cwd: folder, realpath: true}, (err, files) => {
			if (err)
				reject(err)
			else
				resolve(files)
		})
	})
}