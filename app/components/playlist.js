import React, {Component, PropTypes} from 'react'

export default class Playlist extends Component {
	static PropType = {
		videos: PropTypes.array.isRequired,
		onClick: PropTypes.func
	}

	render() {
		return (
			<ul>
				{this.props.videos.map((video, index) => 
					<li key={index}>
						<a href="#" onClick={() => this.props.onClick(video)}>{video}</a>
					</li>
				)}
			</ul>
		)
	}
}