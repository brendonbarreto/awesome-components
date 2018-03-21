import React from 'react'

export default class BootstrapButton extends React.Component {

  render() {
    return <button type="button" className="btn btn-danger">
      {this.props.title}
    </button>
  }
}
