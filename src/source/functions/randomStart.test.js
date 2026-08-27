import randomStart from './randomStart.js'
import point from '../objects/point.js'

describe('randomStart', () => {
  test('returns a point with coordinates within the specified limits', () => {
    const length = 5
    const dir = point(1, 0, 0)
    const lengthLimits = point(10, 10, 10)
    const result = randomStart(length, dir, lengthLimits)
  })
  test('throws an error if length is negative', () => {
    const length = -5
    const dir = point(1, 0, 0)
    const lengthLimits = point(10, 10, 10)
    expect(() => randomStart(length, dir, lengthLimits)).toThrow('Length must be a positive integer')
  })
  test('throws an error if direction has all zero coordinates', () => {
    const length = 5
    const dir = point(0, 0, 0)
    const lengthLimits = point(10, 10, 10)
    expect(() => randomStart(length, dir, lengthLimits)).toThrow('Direction must have at least one non-zero coordinate')
  })
  test('throws an error if direction has negative coordinates', () => {
    const length = 5
    const dir = point(-1, 0, 0)
    const lengthLimits = point(10, 10, 10)
    expect(() => randomStart(length, dir, lengthLimits)).toThrow('Direction must have no negative coordinates')
  })
  test('throws an error if length limits have negative coordinates', () => {
    const length = 5
    const dir = point(1, 0, 0)
    const lengthLimits = point(-10, 10, 10)
    expect(() => randomStart(length, dir, lengthLimits)).toThrow('Length limits must have no negative coordinates')
  })
  test('throws an error if length limits have less than two positive coordinates', () => {
    const length = 5
    const dir = point(1, 0, 0)
    const lengthLimits = point(10, 0, 0)
    expect(() => randomStart(length, dir, lengthLimits)).toThrow('Length limits must have at least two positive coordinates')
  })
})
