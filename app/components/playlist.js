import remote from 'remote'
import React from 'react'
import * as videos from '../services/videos'

export default class Playlist extends React.Component {
	state = {
		videos: []
	}

	componentDidMount() {
		videos.lookup().then(videos => {
			console.log('loaded videos', videos)
			this.state.videos = videos
		})
	}

	render() {
		var list = this.state.videos.map(video => {
				<li>
					<a href="#">video</a>
				</li>
			})

		return <ul>{list}</ul>
	}
}