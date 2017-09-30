import React, {Component} from 'react'
import Tiger from '../icons/tiger.svg'
import Lamb from '../icons/lamb.svg'
import Blank from '../icons/blank.svg'
import PropTypes from 'prop-types'

class Board extends Component {
	elementAt = position => {
    const {graph} = this.props
    const gameElement = graph.valueAt(position)
    switch (gameElement) {
      case 'T':
        return Tiger
      case 'L':
        return Lamb
      default:
      	return Blank
    }
  }

  render() {
    return (
        <svg viewBox="0 0 900 900">
          <polygon points="250,60 100,400 400,400" className="triangle" />
          <polygon points="250,60 200,400 300,400" className="triangle" />
          <polygon points="150,160 350,160 378,220 120,220" className="triangle" />
          <polygon points="150,160 350,160 415,300 80,300" className="triangle" />

          <circle cx="250" cy="58" r="3" />
          <image xlinkHref={this.elementAt(1)} x="238" y="45" height="24" width="24" />

          <circle cx="150" cy="160" r="3" />
          <image xlinkHref={this.elementAt(2)} x="140" y="150" height="24" width="24" />
          <circle cx="205" cy="160" r="3" />
          <image xlinkHref={this.elementAt(3)} x="195" y="150" height="24" width="24" />
          <circle cx="235" cy="160" r="3" />
          <image xlinkHref={this.elementAt(4)} x="222" y="148" height="24" width="24" />
          <circle cx="265" cy="160" r="3" />
          <image xlinkHref={this.elementAt(5)} x="253" y="148" height="22" width="22" />

          <circle cx="295" cy="160" r="3" />
          <image xlinkHref={this.elementAt(6)} x="285" y="150" height="24" width="24" />
          <circle cx="350" cy="160" r="3" />
          <image xlinkHref={this.elementAt(7)} x="340" y="150" height="24" width="24" />

          <circle cx="120" cy="220" r="3" />
          <image xlinkHref={this.elementAt(8)} x="110" y="210" height="24" width="24" />
          <circle cx="180" cy="220" r="3" />
          <image xlinkHref={this.elementAt(9)} x="170" y="210" height="24" width="24" />
          <circle cx="227" cy="220" r="3" />
          <image xlinkHref={this.elementAt(10)} x="217" y="210" height="24" width="24" />
          <circle cx="273" cy="220" r="3" />
          <image xlinkHref={this.elementAt(11)} x="260" y="210" height="24" width="24" />
          <circle cx="320" cy="220" r="3" />
          <image xlinkHref={this.elementAt(12)} x="310" y="210" height="24" width="24" />
          <circle cx="378" cy="220" r="3" />
          <image xlinkHref={this.elementAt(13)} x="368" y="210" height="24" width="24" />

          <circle cx="80" cy="300" r="3" />
          <image xlinkHref={this.elementAt(14)} x="70" y="285" height="24" width="24" />
          <circle cx="145" cy="300" r="3" />
          <image xlinkHref={this.elementAt(15)} x="135" y="285" height="24" width="24" />
          <circle cx="215" cy="300" r="3" />
          <image xlinkHref={this.elementAt(16)} x="205" y="285" height="24" width="24" />
          <circle cx="285" cy="300" r="3" />
          <image xlinkHref={this.elementAt(17)} x="275" y="285" height="24" width="24" />
          <circle cx="355" cy="300" r="3" />
          <image xlinkHref={this.elementAt(18)} x="345" y="285" height="24" width="24" />
          <circle cx="415" cy="300" r="3" />
          <image xlinkHref={this.elementAt(19)} x="405" y="285" height="24" width="24" />
          <circle cx="100" cy="400" r="3" />
          <image xlinkHref={this.elementAt(20)} x="90" y="385" height="24" width="24" />
          <circle cx="200" cy="400" r="3" />
          <image xlinkHref={this.elementAt(21)} x="190" y="385" height="24" width="24" />
          <circle cx="300" cy="400" r="3" />
          <image xlinkHref={this.elementAt(22)} x="290" y="385" height="24" width="24" />
          <circle cx="400" cy="400" r="3" />
          <image xlinkHref={this.elementAt(23)} x="390" y="385" height="24" width="24" />
        </svg>	
    )
  }
}

Board.propTypes = {
  graph: PropTypes.object.isRequired
}
Board.defaultProps = {}

export default Board
