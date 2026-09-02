/**
 * @jest-environment jsdom
 */
import buildMatrix from './buildMatrix.js'
import getDomItemFromElement from './getDomItemFromElement.js'
import point from '../objects/point.js'
import jsonDom from 'json-dom'

describe('getDomItemFromElement', () => {
  test('Retrieve the associated point from an element within a matrix', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(2, 4, 6)))
    const item = liveMatrix.children[3].children[2].children[1]
    expect(getDomItemFromElement(item.element, liveMatrix)).toEqual(item)
  })
  test('Attempt to get a point from an invalid element', () => {
    const liveMatrix = jsonDom.renderHtml(buildMatrix(point(1, 1, 1)))
    const element = liveMatrix.element
    expect(() => getDomItemFromElement(element, liveMatrix)).toThrow('Invalid element or not an element representing a matrix point.')
  })
})
