'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.filter.js')

require('core-js/modules/es.array.map.js')

require('core-js/modules/es.array.concat.js')

require('core-js/stable')

const _getPointsLines = _interopRequireDefault(require('./getPointsLines'))

const _point = _interopRequireDefault(require('../objects/point'))

const _nextCell = _interopRequireDefault(require('./nextCell'))

const _checkValidPoint = _interopRequireDefault(require('./checkValidPoint'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Return all valid points surrounding a provided point
 * @function
 * @param {module:matrixObjects~Point} pnt - The point we want to find adjacent points for.
 * @param {module:matrixObjects~Matrix} matrix - The matrix having the point.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const adjacentPoints = function adjacentPoints (pnt, matrix) {
  return (0, _getPointsLines.default)([[(0, _point.default)(-1, 1, 1), (0, _point.default)(1, -1, -1)], [(0, _point.default)(1, 1, 1), (0, _point.default)(-1, 1, -1)], [(0, _point.default)(-1, -1, 1), (0, _point.default)(1, -1, 1)], [(0, _point.default)(1, 0, 0), (0, _point.default)(1, 1, -1)], [(0, _point.default)(-1, 1, 0), (0, _point.default)(1, 1, 0)]]).concat([(0, _point.default)(0, 0, 1), (0, _point.default)(1, 0, 0), (0, _point.default)(-1, 0, -1), (0, _point.default)(0, 0, -1)]).map(function (p) {
    return (0, _nextCell.default)(pnt, p)
  }).filter(function (p) {
    return (0, _checkValidPoint.default)((0, _nextCell.default)(pnt, p), matrix)
  })
}

const _default = adjacentPoints
exports.default = _default
