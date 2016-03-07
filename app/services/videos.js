import remote from 'remote'

const Glob = remote.require('glob'),
			FOLDER = process.argv[2] || __dirname,
			SUPPORTED_VIDEO_FORMATS_GLOB = '**/*.{mp4,ogg,webm}'

export function lookup(folder = FOLDER) {
	return new Promise((resolve, reject) => {
		new Glob(SUPPORTED_VIDEO_FORMATS_GLOB, {cwd: folder, realpath: true}, (err, files) => {
			if (err)
				reject(err)
			else {
				//resolve(files) @todo - fix glob within Electron
				resolve([
						'/home/wesleyanemam/Videos/Training/ES6 in Angular 2.0 by Erik Arvidsson at ng-europe 2014.mp4'
					, '/home/wesleyanemam/Videos/Training/Javascript- Understanding the Weird Parts - The First 3.5 Hours.mp4'
					, ...files
				])
			}
		})
	})
}