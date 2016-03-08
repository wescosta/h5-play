import React from 'react'
import ReactDOM from 'react-dom'

import * as Videos from './services/videos'

import Player from './components/player'
import Playlist from './components/playlist'
import History from './components/history'

class App extends React.Component {
	state = {
		current: {
			src: '',
			time: 0
		},
		videos: [],
		history: []
	}

	constructor(props){
		super(props)

		Videos.lookup().then(videos => this.setState({
			current: videos[0],
			videos
		}))
	}

	play = (video, time) => {
		let current = {
			src: video,
			time: parseFloat(time || localStorage.getItem(video.toString()) || 0)
		}

		this.setState({current})
	}

	saveProgress = (video, timing, ended) => {
		let history,
				index = this.state.history.indexOf(video)

		if (!ended) {
			localStorage.setItem(video, timing.toString())

				history = index < 0 ? [
					...this.state.history,
					video
				] : this.state.history
		} else {
			localStorage.removeItem(video)

			history = [
				...this.state.history.splice(0, index),
				...this.state.history.splice(index + 1),
			]
		}

		this.setState({history})
	}

	render(){
		return (
			<div>
				<Playlist videos={this.state.videos} onClick={video => this.play(video, 0.1)}/>
				<Player 
					src={this.state.current.src} 
					time={this.state.current.time} 
					saveProgress={this.saveProgress}/>
				<History videos={this.state.history} onClick={this.play}/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('app'))