import Graph from './Graph'

let g = null

describe('Graph', function() {
    beforeEach(function() {
        g = new Graph()
        g.add(1, 2)
    })

    describe('#add', () => {
        it('should add the edges along with vertices', () => {
            expect(g.vertices).toEqual([1, 2])
            expect(g.edges).toEqual({1: [2], 2: [1]})
        })
    })

    describe('#adjacent', () => {
        it('should return true if v1 and v2 are adjacent', () => {
            g.add(2, 3)
            expect(g.adjacent(1, 2)).toBeTruthy()
            expect(g.adjacent(2, 3)).toBeTruthy()
            expect(g.adjacent(1, 3)).toBeFalsy()
        })
    })

    describe('#neighbours', () => {
        it('should return all adjacent vertices given a vertex', () => {
            g.add(2, 3)
            expect(g.neighbours(2)).toEqual([1, 3])
            expect(g.neighbours(1)).toEqual([2])
            expect(g.neighbours(3)).toEqual([2])
            expect(g.neighbours(4)).toEqual(undefined)
        })
    })

    describe('Values', () => {
        it('should assign and retrieve value to a vertex', () => {
            g.setValue(1, 'abc')
            expect(g.valueOf(1)).toEqual('abc')
            expect(g.valueOf(2)).toEqual(undefined)
        })
    })

    describe('#path', () => {
        it('should return the path from v1 to v2 if present', () => {
            g.add(1, 3)
            g.add(2, 4)
            g.add(4, 5)
            expect(g.path(1, 5)).toEqual([1, 2, 4, 5])
            expect(g.path(1, 4)).toEqual([1, 2, 4])
            expect(g.path(1, 3)).toEqual([1, 3])
            expect(g.path(3, 5)).toEqual([3, 1, 2, 4, 5])
        })
    })
})
