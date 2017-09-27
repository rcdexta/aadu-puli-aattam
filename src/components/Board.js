import React, {Component} from 'react'

class Board extends Component {
  render() {
    return (
      <div className="triangle-container">
        <svg viewBox="0 0 900 900">
          <polygon points="250,60 100,400 400,400" className="triangle" />
          <polygon points="250,60 200,400 300,400" className="triangle" />
          <polygon points="150,160 350,160 378,220 120,220" className="triangle" />
          <polygon points="150,160 350,160 415,300 80,300" className="triangle" />

          <circle cx="250" cy="60" r="5">
            1
          </circle>
          <text x="250" y="60" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            1
          </text>

          <circle cx="150" cy="160" r="5" />
          <text x="150" y="160" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            2
          </text>
          <circle cx="205" cy="160" r="5" />
          <text x="205" y="160" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            3
          </text>
          <circle cx="235" cy="160" r="5" />
          <text x="235" y="160" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            4
          </text>
          <circle cx="265" cy="160" r="5" />
          <text x="265" y="160" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            5
          </text>
          <circle cx="295" cy="160" r="5" />
          <text x="295" y="160" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            6
          </text>
          <circle cx="350" cy="160" r="5" />
          <text x="350" y="160" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            7
          </text>

          <circle cx="120" cy="220" r="5" />
          <text x="120" y="220" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            8
          </text>
          <circle cx="180" cy="220" r="5" />
          <text x="180" y="220" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            9
          </text>
          <circle cx="227" cy="220" r="5" />
          <text x="227" y="220" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            10
          </text>
          <circle cx="273" cy="220" r="5" />
          <text x="273" y="220" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            11
          </text>
          <circle cx="320" cy="220" r="5" />
          <text x="320" y="220" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            12
          </text>
          <circle cx="378" cy="220" r="5" />
          <text x="378" y="220" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            13
          </text>

          <circle cx="80" cy="300" r="5" />
          <text x="80" y="300" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            14
          </text>
          <circle cx="145" cy="300" r="5" />
          <text x="145" y="300" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            15
          </text>
          <circle cx="215" cy="300" r="5" />
          <text x="215" y="300" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            16
          </text>
          <circle cx="285" cy="300" r="5" />
          <text x="285" y="300" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            17
          </text>
          <circle cx="355" cy="300" r="5" />
          <text x="355" y="300" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            18
          </text>
          <circle cx="415" cy="300" r="5" />
          <text x="415" y="300" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            19
          </text>

          <circle cx="100" cy="400" r="5" />
          <text x="100" y="400" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            20
          </text>
          <circle cx="200" cy="400" r="5" />
          <text x="200" y="400" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            21
          </text>
          <circle cx="300" cy="400" r="5" />
          <text x="300" y="400" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            22
          </text>
          <circle cx="400" cy="400" r="5" />
          <text x="400" y="400" textAnchor="middle" stroke="#FFF" strokeWidth="0.5px" dy=".01em">
            23
          </text>
        </svg>
      </div>
    )
  }
}

Board.propTypes = {}
Board.defaultProps = {}

export default Board
