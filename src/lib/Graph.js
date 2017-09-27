export default class Graph {
  _vertices = []
  _edges = {}
  _values = {}
  _inferredPath = []

  add = (vertex1, vertex2) => {
    this.vertices.push(vertex1, vertex2)
    this.addUndirectedEdges(vertex1, vertex2)
  }

  addUndirectedEdges = (vertex1, vertex2) => {
    this.edges[vertex1] ? this.edges[vertex1].push(vertex2) : (this.edges[vertex1] = [vertex2])
    this.edges[vertex2] ? this.edges[vertex2].push(vertex1) : (this.edges[vertex2] = [vertex1])
  }

  adjacent = (vertex1, vertex2) => {
    return this.edges[vertex1].includes(vertex2)
  }

  neighbours = vertex => {
    return this.edges[vertex]
  }

  setValue = (vertex, value) => {
    this.values[vertex] = value
  }

  valueOf = vertex => {
    return this.values[vertex]
  }

  path = (fromVertex, toVertex) => {
    this._inferredPath = []
    this.traverse(fromVertex, toVertex, [fromVertex])
    return this._inferredPath
  }

  traverse = (fromVertex, toVertex, path) => {
    console.log('path: ' + path)
    if (fromVertex === toVertex) {
      this._inferredPath = path
    }
    const directedEdges = this.edges[fromVertex] && this.edges[fromVertex].filter(v => !path.includes(v))
    console.log('edges: ' + directedEdges)
    if (directedEdges && directedEdges.length > 0) {
      directedEdges.forEach(v => {
        return this.traverse(v, toVertex, [...path, v])
      })
    }
    return undefined
  }

  get vertices() {
    return this._vertices
  }

  get edges() {
    return this._edges
  }

  get values() {
    return this._values
  }
}
