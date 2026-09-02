'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
var _getMatrixRange = _interopRequireDefault(require('./getMatrixRange.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @typedef {Object} IntervalFits
 * @property {boolean} x - Whether the interval fits within the x-axis of the matrix
 * @property {boolean} y - Whether the interval fits within the y-axis of the matrix
 * @property {boolean} z - Whether the interval fits within the z-axis of the matrix
 */

/**
 * Get random direction point.
 * NOTE: It is possible that the direction is 0,0,0 indicating no move.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {number|null} [interval=null] - An interval where a line would intersect in the direction, null for unspecified
 * @param {module:matrixObjects~Point|null} [maxRanges=null] - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~IntervalFits}
 */
const testIntervalFits = (matrix, interval = null, maxRanges = null) => {
  if (interval === null) {
    return {
      x: true,
      y: true,
      z: true
    }
  }
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  // Use the available ranges as the max ranges
  maxRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  const absoluteInterval = Math.abs(interval)
  return {
    x: maxRanges.x > absoluteInterval,
    y: maxRanges.y > absoluteInterval,
    z: maxRanges.z > absoluteInterval
  }
}
var _default = exports.default = testIntervalFits
