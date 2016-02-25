'use strict'

import fs from 'fs'

export function serialize(filename, data){
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, data, (err) => {
			if (err) reject(`Error while generating file ${filename}`, err)

			resolve(`File ${filename} saved!`)
		})
	})
}