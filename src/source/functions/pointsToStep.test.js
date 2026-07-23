import pointsToStep from './pointsToStep.js'
import point from '../objects/point.js'

describe('pointsToStep', () => {
    test('returns simplified coordinates for 0,0,0 to 0,0,3', () => {
        const start = point(0, 0, 0)
        const end = point(0, 0, 3)
        expect(pointsToStep(start, end)).toEqual({ x: 0, y: 0, z: 1 })
    })
    test('returns simplified coordinates for 0,0,0 to 3,0,0', () => {
        const start = point(0, 0, 0)
        const end = point(3, 0, 0)
        expect(pointsToStep(start, end)).toEqual({ x: 1, y: 0, z: 0 })
    })
    test('returns simplified coordinates for 0,0,0 to 0,3,0', () => {
        const start = point(0, 0, 0)
        const end = point(0, 3, 0)
        expect(pointsToStep(start, end)).toEqual({ x: 0, y: 1, z: 0 })
    })
    test('returns simplified coordinates for 0,0,0 to 3,3,3', () => {
        const start = point(0, 0, 0)
        const end = point(3, 3, 3)
        expect(pointsToStep(start, end)).toEqual({ x: 1, y: 1, z: 1 })
    })
    // negative direction line
    test('returns simplified coordinates for 3,3,3 to 0,0,0', () => {
        const start = point(3, 3, 3)
        const end = point(0, 0, 0)
        expect(pointsToStep(start, end)).toEqual({ x: -1, y: -1, z: -1 })
    })

    test('returns simplified coordinates for 0,0,0 to 6,4,2', () => {
        const start = point(0, 0, 0)
        const end = point(6, 4, 2)
        expect(pointsToStep(start, end)).toEqual({ x: 3, y: 2, z: 1 })
    })

    test('returns simplified coordinates for 5,5,5 to 5,5,5', () => {
        const start = point(5, 5, 5)
        const end = point(5, 5, 5)
        expect(pointsToStep(start, end)).toEqual({ x: 0, y: 0, z: 0 })
    })

    test('returns simplified coordinates for 5,5,5 to 6,4,2', () => {
        const start = point(5, 5, 5)
        const end = point(6, 4, 2)
        expect(pointsToStep(start, end)).toEqual({ x: 1, y: -1, z: -3 })
    })
})
