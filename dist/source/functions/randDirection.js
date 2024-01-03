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
 * Get random direction point
 * @function
 * @param {Array.<module:matrixObjects~Point>} [useCoordinates=[]] - An array of possible directions.
 * @returns {module:matrixObjects~Direction}
 */
const randDirection = function () {
  const useCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
  return useCoordinates.length ? useCoordinates[_siFunciona.default.randomInteger(useCoordinates.length)] : (0, _point.default)(0, 0, 0)
}
var _default = exports.default = randDirection
