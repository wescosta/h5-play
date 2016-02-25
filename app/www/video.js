(function(videos){
	var noop  = function(){}
		, player = document.querySelector('video')
		, keys  = {
				'enter': 		13
			, 'spacebar': 32
			, 'left': 		37
			, 'right': 		39
			, 'up': 			38
			, 'down': 		40
		}
		, keydown = {
				 [keys.spacebar]: () => player.paused ? player.play() : player.pause()
				,[keys.right]: 		() => player.currentTime  += player.duration * 0.05
				,[keys.left]: 		() => player.currentTime  -= player.duration * 0.05
				,[keys.up]: 			() => player.playbackRate += 0.25
				,[keys.down]: 		() => player.playbackRate -= 0.25
				,[keys.enter]: 		() => {
					try {
					if (player.requestFullscreen)
						return player.requestFullscreen()

					if (player.webkitRequestFullScreen)
						return player.webkitRequestFullScreen()

					if (player.mozRequestFullScreen)
						return player.mozRequestFullScreen()

					if (player.msRequestFullScreen)
						return player.msRequestFullScreen()
					} catch (error) {
						console.log('Fullscreen mode failed', error)
					}
				}
			}

	document.onkeydown = key => (keydown[key.which] || noop)()

	player.src = videos[0]
})(window.videos || [])