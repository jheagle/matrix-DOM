'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getCoordinateRanges = _interopRequireDefault(require('./getCoordinateRanges.js'))
var _getMatrixRange = _interopRequireDefault(require('./getMatrixRange.js'))
var _point = _interopRequireDefault(require('../objects/point.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Get random point within a matrix
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix that the point will be contained within.
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const randPoint = (matrix, maxRanges = null) => {
  const [minPoint, maxPoint] = (0, _getMatrixRange.default)(matrix)
  const coordinateRanges = (0, _getCoordinateRanges.default)(minPoint, maxPoint, maxRanges)
  return (0, _point.default)(_siFunciona.default.randomInteger(coordinateRanges.x, minPoint.x), _siFunciona.default.randomInteger(coordinateRanges.y, minPoint.y), _siFunciona.default.randomInteger(coordinateRanges.z, minPoint.z))
}
var _default = exports.default = randPoint
