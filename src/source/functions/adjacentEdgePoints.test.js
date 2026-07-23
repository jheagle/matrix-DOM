/**
 * @jest-environment jsdom
 */
import adjacentEdgePoints from './adjacentEdgePoints.js'
import point from '../objects/point.js'
import matrix from '../objects/matrix.js'

describe('adjacentEdgePoints', () => {
    test('returns all points which touch on edges (not diagonal)', () => {
        const m = matrix({ x: 3, y: 3, z: 3 })
        const pnt = point(1, 1, 1)
        const result = adjacentEdgePoints(pnt, m)
        expect(result).toHaveLength(6)
    })
    test('returns only valid points within the matrix', () => {
        const m = matrix({ x: 3, y: 3, z: 3 })
        const pnt = point(0, 0, 0)
        const result = adjacentEdgePoints(pnt, m)
        expect(result).toHaveLength(3)
    })
})
