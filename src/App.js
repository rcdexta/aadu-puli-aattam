import React, {Component} from 'react'
import Board from './components/Board'
import Graph from './lib/Graph'

class App extends Component {
  initGraph = () => {
    const g = new Graph()
    g.addVerticalEdge(1, 2)
    g.addVerticalEdge(1, 3)
    g.addVerticalEdge(1, 4)
    g.addVerticalEdge(1, 5)
    g.addVerticalEdge(1, 6)
    g.addVerticalEdge(1, 7)
    g.setValue(1, 'T')
    g.setValue(4, 'T')
    g.setValue(5, 'T')
    g.setValue(2, 'L')
    g.setValue(7, 'L')
    return g
  }

  render() {
    return (
      <div className="app">
        <h3>ஆடு புலி ஆட்டம்</h3>
        <Board graph={this.initGraph()} />
      </div>
    )
  }
}

export default App
