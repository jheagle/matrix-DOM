'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Based on provided point and point direction generate next point.
 * @function
 * @param {module:matrixObjects~Point} pnt - Provide the current / initial point
 * @param {module:matrixObjects~Direction} dir - Provide the direction to be applied to find the next point
 * @returns {module:matrixObjects~Point}
 */
const nextCell = (pnt, dir) => (0, _point.default)(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z)
var _default = exports.default = nextCell
