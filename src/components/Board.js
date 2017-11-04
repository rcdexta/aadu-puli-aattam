import React, {Component} from 'react'
import Tiger from '../icons/tiger.svg'
import Lamb from '../icons/lamb.svg'
import Blank from '../icons/blank.svg'
import PropTypes from 'prop-types'

import SVG from 'svg.js'
require('svg.draggable.js')

const ELEMENT_POS_INDEX = {
  1: {x: 238, y: 45},
  2: {x: 140, y: 150},
  3: {x: 195, y: 150},
  4: {x: 222, y: 148},
  5: {x: 253, y: 148},
  6: {x: 285, y: 150},
  7: {x: 340, y: 150},
  8: {x: 110, y: 210},
  9: {x: 170, y: 210},
  10: {x: 217, y: 210},
  11: {x: 260, y: 210},
  12: {x: 310, y: 210},
  13: {x: 368, y: 210},
  14: {x: 70, y: 285},
  15: {x: 135, y: 285},
  16: {x: 205, y: 285},
  17: {x: 275, y: 285},
  18: {x: 345, y: 285},
  19: {x: 405, y: 285},
  20: {x: 90, y: 385},
  21: {x: 190, y: 385},
  22: {x: 290, y: 385},
  23: {x: 390, y: 385}
}

const DOT_POS_INDEX = {
  1: {x: 248, y: 55},
  2: {x: 147, y: 158},
  3: {x: 202, y: 158},
  4: {x: 232, y: 158},
  5: {x: 262, y: 158},
  6: {x: 292, y: 158},
  7: {x: 347, y: 158},
  8: {x: 117, y: 218},
  9: {x: 176, y: 218},
  10: {x: 225, y: 218},
  11: {x: 272, y: 218},
  12: {x: 318, y: 218},
  13: {x: 377, y: 218},
  14: {x: 77, y: 298},
  15: {x: 143, y: 298},
  16: {x: 213, y: 298},
  17: {x: 283, y: 298},
  18: {x: 353, y: 298},
  19: {x: 413, y: 298},
  20: {x: 98, y: 398},
  21: {x: 198, y: 398},
  22: {x: 298, y: 398},
  23: {x: 398, y: 398}
}

class Board extends Component {
  state = {graph: this.props.graph}

  svgImageAt = idx => {
    const gameElement = this.elementAt(idx)
    switch (gameElement) {
      case 'T':
        return Tiger
      case 'L':
        return Lamb
      default:
        return Blank
    }
  }

  elementAt = idx => {
    const {graph} = this.state
    return graph.valueAt(idx)
  }

  onDragStart = evt => {
    console.log('onDragStart')
  }

  guessNewPosition = (newX, newY) => {
    const absDifference = (a, b) => Math.abs(Math.round(a) - b)
    Object.entries(DOT_POS_INDEX).forEach(elt => {
      let idx = elt[0]
      let {x, y} = elt[1]
      if (absDifference(newX, x) <= 15 && absDifference(newY, y) <= 15) {
        const {graph} = this.state
        graph.setValue(idx, 'L')
        this.setState({graph: graph})
      }
    })
  }

  drawDotAt = idx => {
    let pos = DOT_POS_INDEX[idx]
    const circle = this.draw.circle(5).x(pos.x).y(pos.y)
  }

  drawElementAt = idx => {
    let pos = ELEMENT_POS_INDEX[idx]
    let svgGameElement = this.draw.image(this.svgImageAt(idx), 24, 24).x(pos.x).y(pos.y)
    if (this.elementAt(idx) === 'L') {
      const sheep = svgGameElement
      sheep.front()
      sheep.draggable()
      sheep
        .draggable()
        .on('dragmove', e => {
          // console.log(e.detail.p.x + ',' + e.detail.p.y)
        })
        .on('dragend', e => {
          console.log('drag ended')
          this.guessNewPosition(e.detail.p.x, e.detail.p.y)
          console.log(e.detail.p.x + ',' + e.detail.p.y)
        })

      sheep.mouseover(s => {
      	SVG.get(s.srcElement.id).size(48, 48)
			})

			sheep.mouseout(s => {
				SVG.get(s.srcElement.id).size(24, 24)
			})

      sheep.click(s => {
        console.log('sheep clicked: ' + s)
      })
    }
    return svgGameElement
  }

  componentDidMount() {
    this.draw = SVG('board').size('100%', '100%').viewbox(0, 0, 600, 600)
    this.draw
      .polygon('250,60 100,400 400,400')
      .fill('none')
      .stroke({color: '#000', opacity: 0.8, width: 1})
      .back()
      .addClass('unclickable')
      .click(s => {
        console.log('polygon clicked: ' + s)
      })
    this.draw
      .polygon('250,60 200,400 300,400')
      .fill('none')
      .stroke({color: '#000', opacity: 0.8, width: 1})
      .back()
      .addClass('unclickable')
      .click(s => {
        console.log('polygon clicked: ' + s)
      })
    this.draw
      .polygon('150,160 350,160 378,220 120,220')
      .fill('none')
      .stroke({color: '#000', opacity: 0.8, width: 1})
      .back()
      .addClass('unclickable')
      .click(s => {
        console.log('polygon clicked: ' + s)
      })
    this.draw
      .polygon('150,160 350,160 415,300 80,300')
      .fill('none')
      .stroke({color: '#000', opacity: 0.8, width: 1})
      .back()
      .addClass('unclickable')
      .click(s => {
        console.log('polygon clicked: ' + s)
      })

    for (let i = 1; i <= 23; i++) {
      // this.drawDotAt(i)
      this.drawElementAt(i)
    }

    // sheep.draggable()
    // sheep.draggable().on('dragmove', function(e) {
    //     e.preventDefault()
    // console.log(e.detail.p.x + ',' + e.detail.p.y)
    // })
  }

  render() {
    console.log('render again')
    return <div id="board">&nbsp;</div>
  }

  // render() {
  //   return (
  //     <svg viewBox="0 0 600 600" width="100vw" height="120vh" preserveAspectRatio="xMinYMin meet">
  //         <polygon points="250,60 100,400 400,400" className="triangle" />
  //         <polygon points="250,60 200,400 300,400" className="triangle" />
  //         <polygon points="150,160 350,160 378,220 120,220" className="triangle" />
  //         <polygon points="150,160 350,160 415,300 80,300" className="triangle" />
  //
  //         <circle cx="250" cy="58" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(1)} x="238" y="45" height="24" width="24" />
  //
  //         <circle cx="150" cy="160" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(2)} x="140" y="150" height="24" width="24" />
  //         <circle cx="205" cy="160" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(3)} x="195" y="150" height="24" width="24" />
  //         <circle cx="235" cy="160" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(4)} x="222" y="148" height="24" width="24" />
  //         <circle cx="265" cy="160" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(5)} x="253" y="148" height="22" width="22" />
  //
  //         <circle cx="295" cy="160" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(6)} x="285" y="150" height="24" width="24" />
  //         <circle cx="350" cy="160" r="3" />
  //         {/*<image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(7)} x="340" y="150" height="24" width="24" />*/}
  //         <Node x="340" y="150" />
  //
  //         <circle cx="120" cy="220" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(8)} x="110" y="210" height="24" width="24" />
  //         <circle cx="180" cy="220" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(9)} x="170" y="210" height="24" width="24" />
  //         <circle cx="227" cy="220" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(10)} x="217" y="210" height="24" width="24" />
  //         <circle cx="273" cy="220" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(11)} x="260" y="210" height="24" width="24" />
  //         <circle cx="320" cy="220" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(12)} x="310" y="210" height="24" width="24" />
  //         <circle cx="378" cy="220" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(13)} x="368" y="210" height="24" width="24" />
  //
  //         <circle cx="80" cy="300" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(14)} x="70" y="285" height="24" width="24" />
  //         <circle cx="145" cy="300" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(15)} x="135" y="285" height="24" width="24" />
  //         <circle cx="215" cy="300" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(16)} x="205" y="285" height="24" width="24" />
  //         <circle cx="285" cy="300" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(17)} x="275" y="285" height="24" width="24" />
  //         <circle cx="355" cy="300" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(18)} x="345" y="285" height="24" width="24" />
  //         <circle cx="415" cy="300" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(19)} x="405" y="285" height="24" width="24" />
  //         <circle cx="100" cy="400" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(20)} x="90" y="385" height="24" width="24" />
  //         <circle cx="200" cy="400" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(21)} x="190" y="385" height="24" width="24" />
  //         <circle cx="300" cy="400" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(22)} x="290" y="385" height="24" width="24" />
  //         <circle cx="400" cy="400" r="3" />
  //         <image draggable="true" onDragStart={this.onDragStart}  xlinkHref={this.elementAt(23)} x="390" y="385" height="24" width="24" />
  //       </svg>
  //   )
  // }
}

Board.propTypes = {
  graph: PropTypes.object.isRequired
}
Board.defaultProps = {}

export default Board
