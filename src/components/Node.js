import React, {Component} from 'react'

class Node extends Component {
  state = {
    x: this.props.x,
    y: this.props.y
  }

  handleMouseDown = e => {
    this.coords = {
      x: e.pageX,
      y: e.pageY
    }
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove)
    this.coords = {}
  }

  handleMouseMove = e => {
    const xDiff = this.coords.x - e.pageX
    const yDiff = this.coords.y - e.pageY

    this.coords.x = e.pageX
    this.coords.y = e.pageY

    this.setState({
      x: this.state.x - xDiff,
      y: this.state.y - yDiff
    })
  }

  render() {
    const {x, y} = this.state
    return <circle r="10" cx={x} cy={y} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} />
  }
}

export default Node
