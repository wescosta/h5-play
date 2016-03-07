import React, {Component, PropTypes} from 'react'

export default class Player extends Component {
  static defaultProps = {
  	width: "100%",
  	height: "100%",
  	autoPlay: true,
  	controls: true,
    accessKey: 'v'
  }

  static propsType = {
    src: PropTypes.string.isRequired,
    getProgress: PropTypes.func,
    saveProgress: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    autoPlay: PropTypes.bool,
    controls: PropTypes.bool,
    accessKey: PropTypes.string
  }

  render() {
    const saveProgress = () => this.props.saveProgress(
      this.props.src,
      this.refs.video.currentTime, 
      this.refs.video.ended
    )

    const events = {
      onPlay: saveProgress,
      onPause: saveProgress,
      onTimeUpdate: saveProgress,
      onAbort: saveProgress,
      onError: saveProgress,
      onEnded: saveProgress
    }

  	return <video ref="video" {...this.props} {...events}></video>
  }
}