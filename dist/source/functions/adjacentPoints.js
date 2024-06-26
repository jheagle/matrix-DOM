'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.filter.js')
require('core-js/modules/esnext.async-iterator.map.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.filter.js')
require('core-js/modules/esnext.iterator.map.js')
require('core-js/stable')
var _getPointsLines = _interopRequireDefault(require('./getPointsLines'))
var _point = _interopRequireDefault(require('../objects/point'))
var _nextCell = _interopRequireDefault(require('./nextCell'))
var _checkValidPoint = _interopRequireDefault(require('./checkValidPoint'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Return all valid points surrounding a provided point
 * @function
 * @param {module:matrixObjects~Point} pnt - The point we want to find adjacent points for.
 * @param {module:matrixObjects~Matrix} matrix - The matrix having the point.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const adjacentPoints = (pnt, matrix) => (0, _getPointsLines.default)([[(0, _point.default)(-1, 1, 1), (0, _point.default)(1, -1, -1)], [(0, _point.default)(1, 1, 1), (0, _point.default)(-1, 1, -1)], [(0, _point.default)(-1, -1, 1), (0, _point.default)(1, -1, 1)], [(0, _point.default)(1, 0, 0), (0, _point.default)(1, 1, -1)], [(0, _point.default)(-1, 1, 0), (0, _point.default)(1, 1, 0)]]).concat([(0, _point.default)(0, 0, 1), (0, _point.default)(1, 0, 0), (0, _point.default)(-1, 0, -1), (0, _point.default)(0, 0, -1)]).map(p => (0, _nextCell.default)(pnt, p)).filter(p => (0, _checkValidPoint.default)((0, _nextCell.default)(pnt, p), matrix))
var _default = exports.default = adjacentPoints
