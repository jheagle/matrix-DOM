/**
 * @jest-environment jsdom
 */
import buildMatrix from './buildMatrix.js'
import getPointFromElement from './getPointFromElement.js'
import point from '../objects/point.js'
import jsonDom from 'json-dom'

describe('getPointFromElement', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(2, 4, 6)))
    const element = liveMatrix.children[3].children[2].children[1].element
    expect(getPointFromElement(element, liveMatrix)).toEqual(point(1, 2, 3))
  })
  test('Attempt to get a point from an invalid element', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(1, 1, 1)))
    const element = liveMatrix.element
    expect(() => getPointFromElement(element, liveMatrix)).toThrow('Invalid element or not an element representing a matrix point.')
  })
})
