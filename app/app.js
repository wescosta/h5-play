import React from 'react'
import ReactDOM from 'react-dom'

import Player from './components/player'
import Playlist from './components/playlist'

class App extends React.Component {
	render(){
		return (
			<div>
				<Player/>
				<Playlist/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('app'))