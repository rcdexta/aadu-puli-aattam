import Graph from './Graph'

let g = null

describe('Graph', function() {
  beforeEach(function() {
    g = new Graph()
  })

  describe('#add edges', () => {
    it('should add vertical edges edges edges along with vertices', () => {
      g.addVerticalEdge(1, 2)
      g.addVerticalEdge(2, 3)
      expect(g.vertices).toEqual([1, 2, 3])
      expect(g.edges).toEqual({1: [2], 2: [1, 3], 3: [2]})
    })

    it('should add horizontal edges edges edges along with vertices', () => {
      g.addVerticalEdge(1, 2)
      g.addHorizontalEdge(2, 3)
      expect(g.vertices).toEqual([1, 2, 3])
      expect(g.edges).toEqual({1: [2], 2: [1, 3], 3: [2]})
    })
  })

  describe('#adjacent', () => {
    it('should return true if v1 and v2 are adjacent', () => {
      g.addVerticalEdge(1, 2)
      g.addVerticalEdge(2, 3)
      expect(g.adjacent(1, 2)).toBeTruthy()
      expect(g.adjacent(2, 3)).toBeTruthy()
      expect(g.adjacent(1, 3)).toBeFalsy()
    })
  })

  describe('#neighbours', () => {
    it('should return all adjacent vertices given a vertex', () => {
      g.addVerticalEdge(1, 2)
      g.addHorizontalEdge(2, 3)
      expect(g.neighbours(2)).toEqual([1, 3])
      expect(g.neighbours(1)).toEqual([2])
      expect(g.neighbours(3)).toEqual([2])
      expect(g.neighbours(4)).toEqual(undefined)
    })
  })

  describe('Values', () => {
    it('should assign and retrieve value to a vertex', () => {
      g.addVerticalEdge(1, 2)
      g.setValue(1, 'abc')
      expect(g.valueAt(1)).toEqual('abc')
      expect(g.valueAt(2)).toEqual(undefined)
    })
  })

  describe('#path', () => {
		/*
			/         1
			/      /  |  \
			/     2 - 3 - 4
			/    /    |   \
			/    5 -- 6 -- 7
			/
			 */


		beforeEach(() => {
			g.addVerticalEdge(1, 2)
			g.addVerticalEdge(1, 3)
			g.addVerticalEdge(1, 4)
			g.addHorizontalEdge(2, 3)
			g.addHorizontalEdge(3, 4)
			g.addVerticalEdge(2, 5)
			g.addVerticalEdge(3, 6)
			g.addVerticalEdge(4, 7)
			g.addHorizontalEdge(5, 6)
			g.addHorizontalEdge(6, 7)
    })

    it('should return the path from v1 to v2 if present', () => {
      expect(g.path(1, 5)).toEqual([1, 2, 5])
      expect(g.path(1, 4)).toEqual([1, 4])
      expect(g.path(2, 4)).toEqual([2, 3, 4])
      expect(g.path(5, 7)).toEqual([5, 6, 7])
      expect(g.path(3, 7)).toEqual([3,1,4,7])
    })

    it('should find a single hop path from v1 to v2', () => {
			g.addVerticalEdge(5, 8)
      expect(g.isSingleHop(1,5)).toBeTruthy()
      expect(g.isSingleHop(2,4)).toBeTruthy()
      expect(g.isSingleHop(1,7)).toBeTruthy()
      expect(g.isSingleHop(2,8)).toBeTruthy()
      expect(g.isSingleHop(3,7)).toBeFalsy()
    })


  })
})
