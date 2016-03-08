import React, {Component, PropTypes} from 'react'

export default class Player extends Component {
  static propsType = {
    src: PropTypes.string.isRequired,
    saveProgress: PropTypes.func,
    time: PropTypes.float,
    width: PropTypes.string,
    height: PropTypes.string,
    autoPlay: PropTypes.bool,
    controls: PropTypes.bool,
    accessKey: PropTypes.string
  }

  static defaultProps = {
    width: "100%",
    height: "100%",
    autoPlay: true,
    controls: true,
    accessKey: 'v'
  }

  render() {
    const saveProgress = () => this.props.saveProgress(
      this.props.src,
      this.refs.video.currentTime, 
      this.refs.video.ended
    )

    const timeUpdate = () => {
      if (this.refs.video.currentTime < this.props.time)
        this.refs.video.currentTime = this.props.time
    }

    const events = {
      onCanPlay: timeUpdate,
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