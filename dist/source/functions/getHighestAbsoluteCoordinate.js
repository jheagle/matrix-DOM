'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _siFunciona = _interopRequireDefault(require('si-funciona'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Return the first coordinate number with the highest absolute value.
 * @function
 * @param {module:matrixObjects~Point} pnt - A Point to be assessed.
 * @returns {module:matrixObjects~coordinate}
 */
const getHighestAbsoluteCoordinate = function getHighestAbsoluteCoordinate (pnt) {
  return _siFunciona.default.reduceObject(pnt, _siFunciona.default.absoluteMax, 0)
}

const _default = getHighestAbsoluteCoordinate
exports.default = _default
