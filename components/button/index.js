import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  constructor(props) {
      super(props)

      this.getStyle = this.getStyle.bind(this)
      this.getBackground = this.getBackground.bind(this)
      this.getColor = this.getColor.bind(this)
  }

  getBackground() {
    return this.props.alert ? 'red' : this.props.success ? 'green' : 'white'
  }

  getColor() {
    return this.props.alert || this.props.success ? 'white' : 'black'
  }

  getStyle() {
    return {
      padding: '5px',
      fontSize: '15px',
      margin: '1px',
      border: '2px solid black',
      borderRadius: '3px',
      color: this.getColor(),
      background: this.getBackground(),
    };

  }

  render() {
    return <button style={this.getStyle()} onClick={this.props.onClick}>
      { this.props.label }
    </button>
  }
}
