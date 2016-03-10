import React, {Component, PropTypes} from 'react'
import {noop} from '../utils'

export default class Playlist extends Component {
	static PropType = {
		videos: PropTypes.array.isRequired,
		onClick: PropTypes.func
	}

	static defaultProps = {
		onClick: noop
	}

	render() {
		return (
			<ul className="list-unstyled">
				{this.props.videos.map((video, index) => 
					<li key={index} style={{marginBottom: '10px'}}>
						<a href="#" onClick={() => this.props.onClick(video)}>{video}</a>
					</li>
				)}
			</ul>
		)
	}
}