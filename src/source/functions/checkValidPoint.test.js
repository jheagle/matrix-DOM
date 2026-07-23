/**
 * @jest-environment jsdom
 */
import checkValidPoint from './checkValidPoint.js'
import point from '../objects/point.js'
import matrix from '../objects/matrix.js'

describe('checkValidPoint', () => {
    test('should return true for a valid point in a matrix', () => {
        const testMatrix = matrix({ x: 2, y: 2, z: 2 })
        const testPoint = point(1, 1, 1)
        expect(checkValidPoint(testPoint, testMatrix)).toBe(true)
    })

    test('should return false for an invalid point in a matrix', () => {
        const testMatrix = matrix({ x: 2, y: 2, z: 2 })
        const testPoint = point(3, 3, 3)
        expect(checkValidPoint(testPoint, testMatrix)).toBe(false)
    })
})
