'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _pointToDirection = _interopRequireDefault(require('./pointToDirection'))
var _pointDifference = _interopRequireDefault(require('./pointDifference'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Retrieve a directional coordinate value based on two provided points
 * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
 * @function
 * @param {module:matrixObjects~Point} start - The first point to assess.
 * @param {module:matrixObjects~Point} end - The other point to assess.
 * @returns {module:matrixObjects~Direction}
 */
const pointsToDirection = (start, end) => (0, _pointToDirection.default)((0, _pointDifference.default)(start, end))
var _default = exports.default = pointsToDirection
