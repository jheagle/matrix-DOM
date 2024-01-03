'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Generate a random starting point for a line with the provided length and direction.
 * @function
 * @param {number} length - The intended length the resulting line.
 * @param {module:matrixObjects~Direction} dir - The direction the line will extend towards.
 * @param {module:matrixObjects~Point} [lengthLimits={x: 10, y: 10, z: 10}] - The maximum grid size.
 * @returns {module:matrixObjects~Point}
 */
const randomStart = function (length, dir) {
  const lengthLimits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _point.default)(10, 10, 10)
  return (0, _point.default)(_siFunciona.default.randomInteger(lengthLimits.x - (length - 1) * dir.x), _siFunciona.default.randomInteger(lengthLimits.y - (length - 1) * dir.y), _siFunciona.default.randomInteger(lengthLimits.z - (length - 1) * dir.z))
}
var _default = exports.default = randomStart
