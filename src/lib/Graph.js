export default class Graph {
  _vertices = new Set()
  _verticalEdges = {}
  _horizontalEdges = {}
  _values = {}
  _inferredPath = []

  addVerticalEdge = (vertex1, vertex2) => {
    this._vertices.add(vertex1)
    this._vertices.add(vertex2)
    this.addUndirectedEdges(this.verticalEdges, vertex1, vertex2)
  }

  addHorizontalEdge = (vertex1, vertex2) => {
    this._vertices.add(vertex1)
    this._vertices.add(vertex2)
    this.addUndirectedEdges(this.horizontalEdges, vertex1, vertex2)
  }

  addUndirectedEdges = (edges, vertex1, vertex2) => {
    edges[vertex1] ? edges[vertex1].push(vertex2) : (edges[vertex1] = [vertex2])
    edges[vertex2] ? edges[vertex2].push(vertex1) : (edges[vertex2] = [vertex1])
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

  unsetValue = (vertex) => {
    this.values[vertex] = null
  }

  valueAt = vertex => {
    return this.values[vertex]
  }

  isSingleHop = (fromVertex, toVertex) => {
  	return this.path(fromVertex, toVertex).length === 3
	}

  path = (fromVertex, toVertex) => {
    this._inferredPath = []
    this.traverse(fromVertex, toVertex, this.horizontalEdges, [fromVertex])
		if (this._inferredPath.length === 0){
			this.traverse(fromVertex, toVertex, this.verticalEdges, [fromVertex])
		}
    return this._inferredPath
  }

  traverse = (fromVertex, toVertex, edges, path) => {
    // console.log('path: ' + path)
    if (fromVertex === toVertex) {
      this._inferredPath = path
			return
    }
    const directedEdges = edges[fromVertex] && edges[fromVertex].filter(v => !path.includes(v))
    // console.log('edges: ' + directedEdges)
    if (directedEdges && directedEdges.length > 0) {
      directedEdges.forEach(v => {
        return this.traverse(v, toVertex, edges, [...path, v])
      })
    }
  }

  get vertices() {
    return [...this._vertices]
  }

  get horizontalEdges() {
    return this._horizontalEdges
  }

  get verticalEdges() {
    return this._verticalEdges
  }

  get edges() {
    // deep merge both horizontal and vertical edges
    const edges = Object.assign({}, this.verticalEdges)
    Object.keys(this.horizontalEdges).forEach(v => {
      if (edges[v]) {
        edges[v] = [...edges[v], ...this.horizontalEdges[v]]
      } else {
        edges[v] = this.horizontalEdges[v]
      }
    })
    return edges
  }

  get values() {
    return this._values
  }
}
