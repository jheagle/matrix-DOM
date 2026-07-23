/**
 * @jest-environment jsdom
 */
import pointToDirection from './pointToDirection.js'
import point from '../objects/point.js'

describe('pointToDirection', () => {
    test('should return the direction of the point', () => {
        const pnt = point(1, 2, 3)
        const result = pointToDirection(pnt)
        expect(result).toEqual(point(0, 0, 1))
    })
})
