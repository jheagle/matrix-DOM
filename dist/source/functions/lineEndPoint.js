'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Given a start point, line length, and a direction, generate the end point of the line.
 * @function
 * @param {module:matrixObjects~Point} start - The selected starting point.
 * @param {number} length - The total length of the line.
 * @param {module:matrixObjects~Direction} dir - The direction of the line.
 * @returns {module:matrixObjects~Point}
 */
const lineEndPoint = (start, length, dir) => (0, _point.default)(start.x + dir.x * (length - 1), start.y + dir.y * (length - 1), start.z + dir.z * (length - 1))
var _default = exports.default = lineEndPoint
