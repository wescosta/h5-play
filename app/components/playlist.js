import remote from 'remote'
import React from 'react'
import * as videos from '../services/videos'

export default class Playlist extends React.Component {
	state = {
		videos: []
	}

	componentDidMount() {
		videos.lookup().then(videos => this.setState({videos}))
	}

	render() {
		return (
			<ul>
				{this.state.videos.map((video, index) => 
					<li key={index}>
						<a href="#">{video}</a>
					</li>
				)}
			</ul>
		)
	}
}