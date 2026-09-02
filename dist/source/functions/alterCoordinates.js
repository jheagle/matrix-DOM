'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _point = _interopRequireDefault(require('../objects/point'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @callback alterCoordinate
 * @param {module:matrixObjects~coordinate|null} pnt - The coordinate to alter
 * @param {module:matrixObjects~axis} axis - The axis for the coordinate being altered
 * @param {module:matrixObjects~Point|null} point - The point that the coordinate is part of
 * @returns {module:matrixObjects~coordinate|null} - The altered coordinate
 */

/**
 * Alter the coordinates of a point using a function
 * @function
 * @param {module:matrixObjects~Point|null} pnt
 * @param {module:matrixFunctions~alterCoordinate} fn
 * @returns {module:matrixObjects~Point}
 */
const alterCoordinates = (pnt, fn) => {
  var _pnt$x, _pnt$y, _pnt$z
  return (0, _point.default)(fn((_pnt$x = pnt === null || pnt === void 0 ? void 0 : pnt.x) !== null && _pnt$x !== void 0 ? _pnt$x : null, 'x', pnt), fn((_pnt$y = pnt === null || pnt === void 0 ? void 0 : pnt.y) !== null && _pnt$y !== void 0 ? _pnt$y : null, 'y', pnt), fn((_pnt$z = pnt === null || pnt === void 0 ? void 0 : pnt.z) !== null && _pnt$z !== void 0 ? _pnt$z : null, 'z', pnt))
}
var _default = exports.default = alterCoordinates
