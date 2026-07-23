/**
 * @jest-environment jsdom
 */
import pointAndCoordinateToDirection from './pointAndCoordinateToDirection.js'
import point from '../objects/point.js'

describe('pointAndCoordinateToDirection', () => {
    test('should return the direction of the point and coordinate', () => {
        const pnt = point(1, 2, 3)
        const highestCoordinate = 3
        const result = pointAndCoordinateToDirection(pnt, highestCoordinate)
        expect(result).toEqual(point(0, 0, 1))
    })
})
