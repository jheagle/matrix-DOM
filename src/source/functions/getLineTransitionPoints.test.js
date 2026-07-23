/**
 * @jest-environment jsdom
 */
import point from '../objects/point.js'
import getLineTransitionPoints from './getLineTransitionPoints.js'
import { logObject } from 'test-filesystem'
import buildMatrix from './buildMatrix.js'

describe('getLineTransitionPoints', () => {
  test('returns an array of points from 0,0,0 to 0,0,3', () => {
    const start = point(0, 0, 0)
    const end = point(0, 0, 3)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
  })
  test('returns an array of points from 0,0,0 to 3,0,0', () => {
    const start = point(0, 0, 0)
    const end = point(3, 0, 0)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
  })
  test('returns an array of points from 0,0,0 to 0,3,0', () => {
    const start = point(0, 0, 0)
    const end = point(0, 3, 0)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(4)
  })
  test('returns an array of points from 0,0,0 to 3,3,3', () => {
    const start = point(0, 0, 0)
    const end = point(3, 3, 3)
    const result = getLineTransitionPoints(start, end)
    expect(result).toHaveLength(10)
  })
  // negative direction line
  test('returns an array of points from 3,3,3 to 0,0,0', () => {
    const start = point(3, 3, 3)
    const end = point(0, 0, 0)
    const result = getLineTransitionPoints(start, end)
    logObject(result, 'result', 'debug', true)
    expect(result).toHaveLength(10)
  })

  test('returns array of points in rectangular diagonal, ', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const result = getPointsLine(start, end)
    logObject(result, 'result', 'debug', true)
    expect(result).toHaveLength(10)
  })
})
