'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _point = _interopRequireDefault(require('../objects/point'))
var _getFirstAxisOfCoordinate = _interopRequireDefault(require('./getFirstAxisOfCoordinate'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
 * (-1 or 1) to and set the other axis to 0.
 * @param {module:matrixObjects~Point} pnt - The which will be converted to a direction.
 * @param {module:matrixObjects~coordinate} highestCoordinate - The highest coordinate provided by the point.
 * @returns {module:matrixObjects~Direction}
 */
const pointAndCoordinateToDirection = (pnt, highestCoordinate) => (axis => axis !== false ? siFunciona.mergeObjects((0, _point.default)(0, 0, 0), {
  [`${axis}`]: highestCoordinate > 0 ? 1 : -1
}) : (0, _point.default)(0, 0, 0))((0, _getFirstAxisOfCoordinate.default)(pnt, highestCoordinate))
var _default = exports.default = pointAndCoordinateToDirection
