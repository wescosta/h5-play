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
				resolve(files)
			}
		})
	})
}