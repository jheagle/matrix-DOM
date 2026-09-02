'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _areEqualPoints = _interopRequireDefault(require('./areEqualPoints.js'))
var _point = _interopRequireDefault(require('../objects/point.js'))
var _pointDifference = _interopRequireDefault(require('./pointDifference.js'))
var _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./getHighestAbsoluteCoordinate.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @function
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {number|null} transistions - specify the desired number of transitions, resulting points will be transistions+1.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getLineTransitionPoints = function (start, end) {
  const line = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : []
  let transitions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null
  if ((0, _areEqualPoints.default)(start, end)) {
    return [start]
  }
  const difference = (0, _pointDifference.default)(start, end)
  if (transitions === null) {
    transitions = Math.abs((0, _getHighestAbsoluteCoordinate.default)(difference))
  }
  for (let i = 0; i <= transitions; ++i) {
    // Calculate the fractional distance (t) from 0 to 1
    const t = i / transitions

    // Linear interpolation formula
    const x = start.x + (end.x - start.x) * t
    const y = start.y + (end.y - start.y) * t
    const z = start.z + (end.z - start.z) * t
    line.push((0, _point.default)(x, y, z))
  }
  return line
}
var _default = exports.default = getLineTransitionPoints
