import React from 'react'
import ReactDOM from 'react-dom'

import * as Videos from './services/videos'

import Player from './components/player'
import Playlist from './components/playlist'

class App extends React.Component {
	state = {
		current: '',
		videos: []
	}

	constructor(props){
		super(props)

		Videos.lookup().then(videos => this.setState({
			current: videos[0],
			videos
		}))
	}

	play = video => this.setState({current: video})
	saveProgress = (...data) => console.log(data)

	render(){
		return (
			<div>
				<Playlist videos={this.state.videos} onClick={this.play}/>
				<Player src={this.state.current} saveProgress={this.saveProgress}/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('app'))