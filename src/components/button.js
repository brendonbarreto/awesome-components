import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)

    this.isUrgent = this.isUrgent.bind(this)
  }

  isUrgent() {
    const title = this.props.title
    return title[0] === '!' || title[title.length - 1] === '!'
  }

  render() {
    return <button className={`btn ${this.isUrgent() && 'urgent'}`}  onClick={this.props.onClick}>
      {this.props.title}

      {/*language=CSS*/}
      <style jsx>{`
        .btn {
          background-color: #007dff;
          color: white;
          padding: 4px 10px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
        }
        .btn.urgent {
          background-color: red;
        }
      `}</style>
    </button>
  }
}
