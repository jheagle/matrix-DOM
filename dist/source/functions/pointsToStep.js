'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/stable')
var _areEqualPoints = _interopRequireDefault(require('./areEqualPoints.js'))
var _direction = _interopRequireDefault(require('../objects/direction.js'))
var _point = _interopRequireDefault(require('../objects/point.js'))
var _pointDifference = _interopRequireDefault(require('./pointDifference.js'))
var _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Find the lowest common ratio of the difference between the coordinates of two points.
 * @function
 * @param {module:matrixObjects~Point} start - The first point to assess.
 * @param {module:matrixObjects~Point} end - The other point to assess.
 * @returns {module:matrixObjects~Direction}
 */
const pointsToStep = (start, end) => {
  if ((0, _areEqualPoints.default)(start, end)) {
    return (0, _point.default)(0, 0, 0)
  }
  const difference = (0, _pointDifference.default)(start, end)
  const simplifiedCoordinates = _siFunciona.default.simplestRatio(difference.x, difference.y, difference.z)
  return (0, _direction.default)(...simplifiedCoordinates)
}
var _default = exports.default = pointsToStep
