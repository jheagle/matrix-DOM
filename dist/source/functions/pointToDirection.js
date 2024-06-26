'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _pointAndCoordinateToDirection = _interopRequireDefault(require('./pointAndCoordinateToDirection'))
var _getHighestAbsoluteCoordinate = _interopRequireDefault(require('./getHighestAbsoluteCoordinate'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.
 * @param {module:matrixObjects~Point} pnt - The point to be converted to a direction.
 * @returns {module:matrixObjects~Direction}
 */
const pointToDirection = pnt => (0, _pointAndCoordinateToDirection.default)(pnt, (0, _getHighestAbsoluteCoordinate.default)(pnt))
var _default = exports.default = pointToDirection
