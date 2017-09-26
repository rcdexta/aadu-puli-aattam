import React, {Component} from 'react';

class Board extends Component {
  render () {
    return (
        <div className="triangle-container">
          <svg viewBox="0 0 900 900">
            <polygon points="250,60 100,400 400,400" className="triangle" />
            <polygon points="250,60 200,400 300,400" className="triangle" />
            <polygon points="150,160 350,160 378,220 120,220" className="triangle" />
            <polygon points="150,160 350,160 415,300 80,300" className="triangle" />

            <circle cx="250" cy="60" r="5"/>

            <circle cx="150" cy="160" r="5"/>
            <circle cx="205" cy="160" r="5"/>
            <circle cx="235" cy="160" r="5"/>
            <circle cx="265" cy="160" r="5"/>
            <circle cx="295" cy="160" r="5"/>
            <circle cx="350" cy="160" r="5"/>

            <circle cx="120" cy="220" r="5"/>
            <circle cx="180" cy="220" r="5"/>
            <circle cx="227" cy="220" r="5"/>
            <circle cx="273" cy="220" r="5"/>
            <circle cx="320" cy="220" r="5"/>
            <circle cx="378" cy="220" r="5"/>

            <circle cx="80" cy="300" r="5"/>
            <circle cx="145" cy="300" r="5"/>
            <circle cx="215" cy="300" r="5"/>
            <circle cx="285" cy="300" r="5"/>
            <circle cx="355" cy="300" r="5"/>
            <circle cx="415" cy="300" r="5"/>

            <circle cx="100" cy="400" r="5"/>
            <circle cx="200" cy="400" r="5"/>
            <circle cx="300" cy="400" r="5"/>
            <circle cx="400" cy="400" r="5"/>

          </svg>
        </div>
    );
  }
}

Board.propTypes = {};
Board.defaultProps = {};

export default Board;
