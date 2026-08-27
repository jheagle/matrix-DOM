/**
 * @jest-environment jsdom
 */
import prevCell from './prevCell.js'
import point from '../objects/point.js'
import matrix from '../objects/matrix.js'

describe('prevCell', () => {
    test('should return the previous cell for a given point and offset', () => {
        const testPoint = point(1, 1, 1)
        const offset = point(1, 0, 0)
        expect(prevCell(testPoint, offset)).toEqual(point(0, 1, 1))
    })
})
