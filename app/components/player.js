import React from 'react'

export default class Player extends React.Component {
  static defaultProps = {
  	width: "50%",
  	height: "50%",
  	autoPlay: true,
  	controls: true,
  }

  static propsType = {
  	width: React.PropTypes.string,
  	height: React.PropTypes.string,
  	autoPlay: React.PropTypes.bool,
  	controls: React.PropTypes.bool,
  }

  render() {
  	return <video {...this.props}></video>
  }
}