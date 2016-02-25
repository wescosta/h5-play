'use strict'

export function task(promise, task = 'Working') {
	if (!(promise instanceof Promise))
		throw new Error('A promise is required for asynchronous processing')

	let done 				= false
		, error 			= false
		, processing 	= (function*(){
				let spin 		= ['|', '/', '-', '\\']
					, length 	= spin.length
					, counter = 0

				while(true)
					yield spin[counter++ %length]
			})()
		,	interval 		= setInterval(() => {
				process.stdout.clearLine()
				process.stdout.cursorTo(0)

				process.stdout.write(`${task} ${
					done  ? 'finished! :)\n' : 
					error ? `\nOops! An error just happened. :(\n ${error}` :
					processing.next().value
				}`)

				if (done || error) clearInterval(interval)
			}, 100)

	return promise.then(() => done = true).catch((err) => {error = err})
}