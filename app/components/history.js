import React, {Component, PropTypes} from 'react'
import Playlist from './playlist'
import {noop} from '../utils'

export default class History extends Component {
	static propsType = {
		videos: PropTypes.array.isRequired,
		onClick: PropTypes.func
	}

	static defaultProps = {
		videos: [],
		onClick: noop
	}

	render(){
		return this.props.videos.length ? (
			<div>
				<h2>Continue watching from where you left...</h2>
				<Playlist {...this.props}/>
			</div>
		) : <div></div>
	}
}